import express from "express";
import { 
    getBiodatas,
    getBiodatasById, 
    createBiodata,
    updateBiodata,
    deleteBiodata,
 } from "../controllers/biodataControllers.js";

const router = express.Router();

router.get("/", getBiodatas);
router.get("/:id", getBiodatasById);
router.post("/", createBiodata);
router.put("/:id", updateBiodata);
router.delete("/:id", deleteBiodata);

export default router;
