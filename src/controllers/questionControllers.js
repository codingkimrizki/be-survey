import pool from "../config/db.js";

// export const getQuestions = async (req, res) => {
//   try {
//     const [rows] = await pool.query("SELECT * FROM apps");
//     res.json(rows);
//   } catch (error) {
//     res.status(500).json({ message: "Failed to get questions", error: error.message });
//   }
// };

// src/controllers/questionControllers.js

export const getQuestions = async (req, res) => {
  try {
    // Nanti ambil dari DB
    res.json({
      message: "GET questions",
      data: [],
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createQuestion = async (req, res) => {
  try {
    const data = req.body;

    res.json({
      message: "POST question",
      data,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateQuestion = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;

    res.json({
      message: `PUT question id ${id}`,
      data: body,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteQuestion = async (req, res) => {
  try {
    const { id } = req.params;

    res.json({
      message: `DELETE question id ${id}`,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

