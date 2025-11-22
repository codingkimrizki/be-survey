import db from "../../models/index.js";

const Questions = db.questions;
const Answers = db.answers;
const Apps = db.apps;
const MasterApps = db.master_apps;

//finalScore
export const getMasterAppFinalScore = async (req, res) => {
  try {
    const { id_master_apps } = req.params;

    // --- panggil ulang logic yang sama kayak getMasterAppScore ---
    const master = await MasterApps.findByPk(id_master_apps);
    if (!master) {
      return res.status(404).json({ message: "Master Apps not found" });
    }

    const apps = await Apps.findAll({
      where: { id_master_apps },
      attributes: ["id_apps"]
    });

    const appIds = apps.map(a => a.id_apps);
    if (appIds.length === 0) {
      return res.json({
        finalScore: 0
      });
    }

    const biodataRows = await Answers.findAll({
      where: { id_apps: appIds },
      attributes: ["id_biodata"],
      group: ["id_biodata"]
    });

    const biodataIds = biodataRows.map(b => b.id_biodata);

    const PAGE_COUNT = 7;
    const pageScores = [];

    for (let page = 1; page <= PAGE_COUNT; page++) {
      const questions = await Questions.findAll({
        where: {
          id_page: page,
          question_type: { [db.Sequelize.Op.not]: "suggest" }
        }
      });

      const questionIds = questions.map(q => q.id_question);

      if (questionIds.length === 0) {
        pageScores.push(0);
        continue;
      }

      let totalAll = 0;

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
            if (type === "mixed") biodataScore += val === "Y" ? 10 : 0;
            if (type === "mixed2") biodataScore += val === "Y" ? 0 : 10;
            if (type === "mixed3") biodataScore += val === "Y" ? 10 : 0;
          }
        }

        totalAll += biodataScore / answers.length;
      }

      const finalPageScore = totalAll / biodataIds.length;
      pageScores.push(finalPageScore);
    }

    // --- hitung final score (rata2 seluruh page) ---
    const validPages = pageScores.filter(s => s > 0);

    let finalScore = 0;
    if (validPages.length > 0) {
      finalScore = validPages.reduce((a, b) => a + b, 0) / validPages.length;
    }

    res.json({
      id_master_apps,
      master_name: master.name_master_apps,
      finalScore: Number(finalScore.toFixed(2))
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};