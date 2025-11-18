import express from "express";
import { 
    getMasterApps,
    getMasterAppsById, 
    createMasterApps,
    updateMasterApps,
    deleteMasterApps,
 } from "../controllers/masterAppsControllers.js";

const router = express.Router();

router.get("/", getMasterApps);
router.get("/:id", getMasterAppsById);
router.post("/", createMasterApps);
router.put("/:id", updateMasterApps);
router.delete("/:id", deleteMasterApps);

export default router;
