// routes/answers.js
import express from 'express';
import { getMasterAppFinalScore } from '../controllers/finalScoreControllers.js';

const router = express.Router();

// skor per page untuk 1 user
router.get('/master/final/:id_master_apps', getMasterAppFinalScore);

export default router;
