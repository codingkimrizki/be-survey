import db from "../../models/index.js";

const Department = db.department;

//Get All
export const getDepartments = async (req, res) => {
  try {
    const data = await Department.findAll();
    res.json({
      message: "Success GET departments",
      data: data,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//Get by ID
export const getDepartmentById = async (req, res) => {
  try {
    const { id_department } = req.params;
    const data = await Department.findByPk(id_department); //temukan berdasarkan id

    if (!data) 
      return res.status(404).json({ message: "Department not found" });
    res.json({ message: "Success GET department", data: data });
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
};

//POST
export const createDepartment = async (req, res) => {
  try {
    const { name_department } = req.body;
    if (!name_department) return res.status(400).json({ message: "name_department is required" });

    const created = await Department.create({
      name_department,
    });

    res.json({
      message: "Success CREATE department",
      data: created,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//PUT & Update
export const updateDepartment = async (req, res) => {
  try {
    const { id_department } = req.params;
    const { name_department } = req.body;

    const data = await Department.findByPk(id_department);
    if (!data) 
      return res.status(404).json({ message: "Department not found" });

    await Department.update({name_department});
    res.json({ message: "Success UPDATE department", data: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE
export const deleteDepartment = async (req, res) => {
  try {
    const { id_department } = req.params;
    const data = await Department.findByPk(id_department);
    if (!data) 
      return res.status(404).json({ message: "Department not found" });

    await Department.destroy(); //hapus
    res.json({ message: "Success DELETE department" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


