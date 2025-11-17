import express from "express";
import { 
    getDepartments,
    getDepartmentsById, 
    createDepartment,
    updateDepartment,
    deleteDepartment,
 } from "../controllers/departmentControllers.js";

const router = express.Router();

router.get("/", getDepartments);
router.get("/:id", getDepartmentsById);
router.post("/", createDepartment);
router.put("/:id", updateDepartment);
router.delete("/:id", deleteDepartment);

export default router;
