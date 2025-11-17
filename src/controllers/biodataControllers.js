import db from "../../models/index.js";

const biodata = db.biodata;
const department = db.department;

//Get All
export const getBiodatas = async (req, res) => {
  try {
    const data = await biodata.findAll({
        include: [{ model: department, attributes: ["name_department"] }]
    });
    res.json({
      message: "Success GET biodata",
      data: data,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//Get by ID
export const getBiodatasById = async (req, res) => {
  try {
    const { id } = req.params;
    const bio = await biodata.findByPk(id);
    if (!bio) return res.status(404).json({ message: "Biodata not found" });
    res.json({ message: "Success GET Biodata", data: bio });
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
};

//POST
export const createBiodata = async (req, res) => {
  try {
    const { name_biodata, id_department } = req.body;
    if (!name_biodata) return res.status(400).json({ message: "name_biodata is required" });

    const newBio = await biodata.create({
      name_biodata,
      id_department,
      createdAt: new Date(),
      updateAt: new Date(),
    });

    res.json({
      message: "Success CREATE biodata",
      data: newBio,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//PUT & Update
export const updateBiodata = async (req, res) => {
  try {
    const { id } = req.params;
    const { name_biodata } = req.body;

    const bio = await biodata.findByPk(id);
    if (!bio) return res.status(404).json({ message: "Biodata not found" });

    await bio.update({ name_biodata, updateAt: new Date() });
    res.json({ message: "Success UPDATE biodata", data: bio });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE
export const deleteBiodata = async (req, res) => {
  try {
    const { id } = req.params;
    const bio = await biodata.findByPk(id);
    if (!bio) return res.status(404).json({ message: "Biodata not found" });

    await bio.destroy();
    res.json({ message: "Success DELETE biodata" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


