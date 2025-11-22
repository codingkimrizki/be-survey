// controllers/scoreController.js
import db from "../../models/index.js";

const Questions = db.questions;
const Answers = db.answers;

// helper: konversi answer_value -> score (0-10)
function convertAnswerToScore(questionType, answerValue) {
  if (answerValue === null || answerValue === undefined) return null;

  const v = String(answerValue).trim();

  switch (questionType) {
    case 'mixed':
      // Y=10, N=0
      if (v.toUpperCase() === 'Y') return 10;
      if (v.toUpperCase() === 'N') return 0;
      return Number(v) || 0;

    case 'mixed2':
      // Y=0, N=10
      if (v.toUpperCase() === 'Y') return 0;
      if (v.toUpperCase() === 'N') return 10;
      return Number(v) || 0;

    case 'mixed3':
      // Y=10, N=10 (both 10)
      if (v.toUpperCase() === 'Y') return 10;
      if (v.toUpperCase() === 'N') return 0;
      return Number(v) || 0;

    case 'suggest':
      // should be excluded before calling this helper
      return null;

    default:
      // rating or numeric: parse number
      const num = Number(v);
      return isNaN(num) ? null : num;
  }
}

// 1) skor per biodata (person)
export const getPageScorePerBiodata = async (req, res) => {
  try {
    const { id_page, id_biodata } = req.params;

    // ambil semua pertanyaan di page (exclude suggest)
    const questions = await Questions.findAll({
      where: { id_page },
      attributes: ['id_question', 'question_type']
    });

    const validQuestions = questions.filter(q => q.question_type !== 'suggest');
    const questionIds = validQuestions.map(q => q.id_question);

    // ambil semua jawaban untuk biodata + questions ini
    const answers = await Answers.findAll({
      where: { id_biodata, id_question: questionIds },
      attributes: ['id_question', 'answer_value']
    });

    // quick map answer by id_question
    const answerMap = {};
    answers.forEach(a => { answerMap[a.id_question] = a.answer_value; });

    let totalScore = 0;
    let answeredCount = 0;
    const perQuestionDetail = [];

    for (const q of validQuestions) {
      const raw = answerMap[q.id_question];
      const score = convertAnswerToScore(q.question_type, raw);

      if (score === null) {
        // skip question if no answer or not convertible
        perQuestionDetail.push({ id_question: q.id_question, answered: false, raw: raw ?? null, score: null });
        continue;
      }

      totalScore += score;
      answeredCount++;
      perQuestionDetail.push({ id_question: q.id_question, answered: true, raw, score });
    }

    const average = answeredCount > 0 ? (totalScore / answeredCount) : 0;

    return res.json({
      message: 'Success get page score per biodata',
      id_page,
      id_biodata,
      answered_count: answeredCount,
      total_score: totalScore,
      average,
      per_question: perQuestionDetail
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message });
  }
};

// 2) aggregate: hitung skor per biodata dulu lalu ambil rata-rata semua biodata yang jawab
export const getPageScoreAggregate = async (req, res) => {
  try {
    const { id_page } = req.params;

    // ambil semua pertanyaan di page (exclude suggest)
    const questions = await Questions.findAll({
      where: { id_page },
      attributes: ['id_question', 'question_type']
    });

    const validQuestions = questions.filter(q => q.question_type !== 'suggest');
    const questionIds = validQuestions.map(q => q.id_question);

    if (questionIds.length === 0) {
      return res.json({
        message: 'No valid questions on this page',
        id_page,
        respondent_count: 0,
        average: 0
      });
    }

    // ambil semua answers untuk questions ini (untuk semua biodata)
    const allAnswers = await Answers.findAll({
      where: { id_question: questionIds },
      attributes: ['id_question', 'id_biodata', 'answer_value']
    });

    // group answers by biodata
    const byBiodata = {};
    allAnswers.forEach(a => {
      if (!byBiodata[a.id_biodata]) byBiodata[a.id_biodata] = {};
      byBiodata[a.id_biodata][a.id_question] = a.answer_value;
    });

    const perBiodataScores = [];
    for (const [biodataId, answersMap] of Object.entries(byBiodata)) {
      let sum = 0;
      let answered = 0;

      for (const q of validQuestions) {
        const raw = answersMap[q.id_question];
        const score = convertAnswerToScore(q.question_type, raw);

        if (score === null) continue;
        sum += score;
        answered++;
      }

      if (answered === 0) continue; // skip respondent yang nggak jawab apapun di page ini

      const avg = sum / answered;
      perBiodataScores.push({ id_biodata: biodataId, answered_count: answered, total_score: sum, average: avg });
    }

    const respondentCount = perBiodataScores.length;
    const totalOfAverages = perBiodataScores.reduce((acc, p) => acc + p.average, 0);
    const pageAverage = respondentCount > 0 ? (totalOfAverages / respondentCount) : 0;

    return res.json({
      message: 'Success get aggregated page score',
      id_page,
      respondent_count: respondentCount,
      page_average: pageAverage,
      details: perBiodataScores
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message });
  }
};
