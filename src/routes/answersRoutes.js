import express from "express";
import { 
    getAnswers,
    getAnswerById,
    createAnswers,
    updateAnswer,
    deleteAnswer,
 } from "../controllers/answersControllers.js";

const router = express.Router();

router.get("/", getAnswers);
router.get("/:id_answer", getAnswerById);
router.post("/", createAnswers);
router.put("/:id_answer", updateAnswer);
router.delete("/:id_answer", deleteAnswer);

export default router;
