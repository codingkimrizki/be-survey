// routes/answers.js
import express from 'express';
import { getMasterAppScore } from '../controllers/scoreControllersBiodata.js';

const router = express.Router();

// skor per page untuk 1 user
router.get('/master/:id_master_apps', getMasterAppScore);

export default router;
