import express from "express";
import { 
    getApps,
    getAppsById, 
    createApps,
    updateApps,
    deleteApps,
 } from "../controllers/appsControllers.js";

const router = express.Router();

router.get("/", getApps);
router.get("/:id", getAppsById);
router.post("/", createApps);
router.put("/:id", updateApps);
router.delete("/:id", deleteApps);

export default router;
