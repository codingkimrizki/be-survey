import db from "../../models/index.js";

const Answers = db.answers;

//Get All
export const getAnswers = async (req, res) => {
  try {
    const data = await Answers.findAll(); //find all items
    res.json({
      message: "Success GET apps",
      data: data,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//Get by ID
export const getAnswerById = async (req, res) => {
  try {
    const { id_answer } = req.params;
    const data = await Answers.findByPk(id_answer); //find by id
    if (!data) 
        return res.status(404).json({ message: "answer not found" });
    
    res.json({ 
        message: "Success GET Answer", 
        data: data 
    });
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
};

//PUSH dalam bentuk array
export const createAnswers = async (req, res) => {
    try {
        const answers =req.body;
        if (!Array.isArray(answers)) {
            return res.status(400).json({
                message: "Input must be an array",
            });
        }

        // Optional: validasi minimal
        const invalid = answers.some(a => !a.id_biodata || !a.id_apps || !a.id_question);
        if (invalid) {
          return res.status(400).json({
            message: "Each answer must have id_biodata, id_app, and id_question"
          });
        }

        const created = await Answers.bulkCreate (answers); //input jawaban array
        res.status(201).json({
        message: "Success input Answers",
        data: created,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//PUT & UPDATE
export const updateAnswer = async (req, res) => {
  try {
    const { id_answer} = req.params;
    const { answer_value } = req.body;

    const data = await Answers.findByPk(id_answer); //temukan dulu datanya
    if (!data)
      return res.status(404).json({ message: "Answer not found" });

    await data.update({
      answer_value,
    }); //perintah update

    res.json({
      message: "Success UPDATE",
      data: data,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//DELETE
export const deleteAnswer = async (req, res) => {
  try {
    const { id_answer } = req.params;
    const data = await Answers.findByPk(id_answer);
    if (!data)
      return res.status(404).json({ message: "Answer not found" });

    await data.destroy(); //perintah delete

    res.json({
      message: "Success DELETE",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
