// routes/answers.js
import express from 'express';
import { getPageScorePerBiodata, getPageScoreAggregate } from '../controllers/scoreControllers.js';

const router = express.Router();

// skor per page untuk 1 user
router.get('/score/page/:id_page/biodata/:id_biodata', getPageScorePerBiodata);

// skor aggregate semua responden untuk 1 page
router.get('/score/page/:id_page', getPageScoreAggregate);

export default router;
