import db from "../../models/index.js";

const Biodata = db.biodata;
const Department = db.department;

//Get All
export const getBiodatas = async (req, res) => {
  try {
    const data = await Biodata.findAll({
        include: [{ model: Department, attributes: ["name_department"] }]
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
    const bio = await Biodata.findByPk(id);
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
    if (!id_department) return res.status(400).json({ message: "biodata is required" });

    const newBio = await Biodata.create({
      name_biodata,
      id_department,
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

    const bio = await Biodata.findByPk(id);
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
    const bio = await Biodata.findByPk(id);
    if (!bio) return res.status(404).json({ message: "Biodata not found" });

    await bio.destroy();
    res.json({ message: "Success DELETE biodata" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


