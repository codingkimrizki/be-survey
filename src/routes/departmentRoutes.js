import express from "express";
import { 
    getDepartments,
    getDepartmentById, 
    createDepartment,
    updateDepartment,
    deleteDepartment,
 } from "../controllers/departmentControllers.js";

const router = express.Router();

router.get("/", getDepartments);
router.get("/:id_department", getDepartmentById);
router.post("/", createDepartment);
router.put("/:id_department", updateDepartment);
router.delete("/:id_department", deleteDepartment);

export default router;
