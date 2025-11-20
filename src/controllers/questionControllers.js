import db from "../../models/index.js";

const Questions = db.questions;

//Get All
export const getQuestions = async (req, res) => {
  try {
    const data = await Questions.findAll(); //perintah temukan
    res.json({
      message: "GET questions",
      data,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//Get by ID
export const getQuestionByID = async (req, res) => {
  try {
    const { id_question } = req.params;
    const data = await Questions.findByPk(id_question); //perintah find
    if (!data) 
        return res.status(404).json({ message: "Apps not found" });

    res.json({
      message: "Success GET question",
      data,
    });
  } catch (error) {
    res.status(500).json({ error: err.message });
  }
};

//Get question per id_pages
export const getQuestionsByPage = async (req, res) => {
  try {
    const { id_page } = req.params;
    const data = await Questions.findAll({ where: { id_page } });
    res.json({ message: 'GET questions by page', data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


//POST
export const createQuestion = async (req, res) => {
  try {
    const { id_page, question_text, question_type} = req.body;

    const created = await Questions.create({
      id_page,
      question_text,
      question_type,
    }); //perintah create

    res.status(201).json({
      message: "Success CREATE question",
      data: created,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


//PUT & UPDATE
export const updateQuestion = async (req, res) => {
  try {
    const { id_question } = req.params;
    const { question_text, question_type } = req.body;

    const data = await Questions.findByPk(id_question);//temukan datanya
    if(!data)
      return res.status(404).json({message: "Question not Found"})

    await data.update({
      question_text, 
      question_type,
    }) // update data

    res.json({
      message: "SUCCES UPDATE",
      data: data,
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//DELETE
export const deleteQuestion = async (req, res) => {
  try {
    const { id_question } = req.params;
    const data = await Questions.findByPk(id_question);
    if (!data)
      return res.status(404).json({message:"Question not Found"})

    await data.destroy(); //hapus data

    res.json({
      message: "Succes Delete Question",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

