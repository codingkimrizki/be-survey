import express from "express";
import { 
    getBiodatas,
    getBiodataById, 
    createBiodata,
    updateBiodata,
    deleteBiodata,
 } from "../controllers/biodataControllers.js";

const router = express.Router();

router.get("/", getBiodatas);
router.get("/:id_biodata", getBiodataById);
router.post("/", createBiodata);
router.put("/:id_biodata", updateBiodata);
router.delete("/:id_biodata", deleteBiodata);

export default router;
