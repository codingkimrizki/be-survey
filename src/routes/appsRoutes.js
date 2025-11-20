import express from "express";
import { 
    getApps,
    getAppById, 
    createApp,
    updateApp,
    deleteApp,
 } from "../controllers/appsControllers.js";

const router = express.Router();

router.get("/", getApps);
router.get("/:id_apps", getAppById);
router.post("/", createApp);
router.put("/:id_apps", updateApp);
router.delete("/:id_apps", deleteApp);

export default router;
