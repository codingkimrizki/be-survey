import express from "express";
import { 
    getMasterApps,
    getMasterAppById, 
    createMasterApp,
    updateMasterApp,
    deleteMasterApp,
 } from "../controllers/masterAppsControllers.js";

const router = express.Router();

router.get("/", getMasterApps);
router.get("/:id_master_apps", getMasterAppById);
router.post("/", createMasterApp);
router.put("/:id_master_apps", updateMasterApp);
router.delete("/:id_master_apps", deleteMasterApp);

export default router;
