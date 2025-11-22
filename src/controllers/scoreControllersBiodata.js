import db from "../../models/index.js";

const Questions = db.questions;
const Answers = db.answers;
const Apps = db.apps;
const MasterApps = db.master_apps;

export const getMasterAppScore = async (req, res) => {
  try {
    const { id_master_apps } = req.params;

    // 1. Ambil master app (optional buat display)
    const master = await MasterApps.findByPk(id_master_apps);
    if (!master) {
      return res.status(404).json({ message: "Master Apps not found" });
    }

    // 2. Ambil semua apps di master apps ini
    const apps = await Apps.findAll({
      where: { id_master_apps },
      attributes: ["id_apps"]
    });

    const appIds = apps.map(a => a.id_apps);

    if (appIds.length === 0) {
      return res.json({
        message: "No apps found for this master app",
        pages: []
      });
    }

    // 3. Ambil semua biodata yg mengisi salah satu app
    const biodataRows = await Answers.findAll({
      where: { id_apps: appIds },
      attributes: ["id_biodata"],
      group: ["id_biodata"]
    });

    const biodataIds = biodataRows.map(b => b.id_biodata);

    // 4. Process page per page (1–10)
    const PAGE_COUNT = 7;
    const results = [];

    for (let page = 1; page <= PAGE_COUNT; page++) {

      // 4A. Ambil semua pertanyaan di page ini
      const questions = await Questions.findAll({
        where: {
          id_page: page,
          question_type: { [db.Sequelize.Op.not]: "suggest" }
        }
      });

      const questionIds = questions.map(q => q.id_question);

      if (questionIds.length === 0) {
        results.push({ page, score: 0 });
        continue;
      }

      // 4B. Hitung score per biodata
      let totalOfAllBiodata = 0;

      for (const id_biodata of biodataIds) {
        const answers = await Answers.findAll({
          where: {
            id_biodata,
            id_question: questionIds
          }
        });

        let biodataScore = 0;

        for (const ans of answers) {
          const q = questions.find(q => q.id_question === ans.id_question);
          const type = q.question_type;
          const val = ans.answer_value;

          if (!isNaN(val)) {
            biodataScore += Number(val);
          } else {
            if (type === "mixed") {
              biodataScore += val === "Y" ? 10 : 0;
            } else if (type === "mixed2") {
              biodataScore += val === "Y" ? 0 : 10;
            } else if (type === "mixed3") {
              biodataScore += val === "Y" ? 10 : 0;
            }
          }
        }

        totalOfAllBiodata += biodataScore / answers.length;
      }

      // 4C. Rata-rata final
      const finalScore = totalOfAllBiodata / biodataIds.length;

      results.push({
        page,
        score: Number(finalScore.toFixed(2))
      });
    }

    res.json({
      id_master_apps,
      master_name: master.name_master_apps,
      pages: results
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

