import db from "../../models/index.js";

const Department = db.department;

//Get All
export const getDepartments = async (req, res) => {
  try {
    const dept = await Department.findAll();
    res.json({
      message: "Success GET departments",
      data: dept,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//Get by ID
export const getDepartmentsById = async (req, res) => {
  try {
    const { id } = req.params;
    const dept = await Department.findByPk(id);
    if (!dept) return res.status(404).json({ message: "Department not found" });
    res.json({ message: "Success GET department", data: dept });
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
};

//POST
export const createDepartment = async (req, res) => {
  try {
    const { name_department } = req.body;
    if (!name_department) return res.status(400).json({ message: "name_department is required" });

    const newDept = await Department.create({
      name_department,
    });

    res.json({
      message: "Success CREATE department",
      data: newDept,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//PUT & Update
export const updateDepartment = async (req, res) => {
  try {
    const { id } = req.params;
    const { name_department } = req.body;

    const dept = await Department.findByPk(id);
    if (!dept) return res.status(404).json({ message: "Department not found" });

    await dept.update({name_department});
    res.json({ message: "Success UPDATE department", data: dept });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE
export const deleteDepartment = async (req, res) => {
  try {
    const { id } = req.params;
    const dept = await Department.findByPk(id);
    if (!dept) return res.status(404).json({ message: "Department not found" });

    await dept.destroy();
    res.json({ message: "Success DELETE department" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


