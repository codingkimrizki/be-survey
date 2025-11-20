import { Router } from "express";
// import { getQuestions } from "../controllers/questionControllers.js";
import {
  getQuestions,
  getQuestionByID,
  getQuestionsByPage,
  createQuestion,
  updateQuestion,
  deleteQuestion,
} from "../controllers/questionControllers.js";

const router = Router();

router.get("/", getQuestions);
router.get("/:id_question", getQuestionByID);
router.get('/page/:id_page', getQuestionsByPage);
router.post("/", createQuestion);
router.put("/:id_question", updateQuestion);
router.delete("/:id_question", deleteQuestion);

export default router;
