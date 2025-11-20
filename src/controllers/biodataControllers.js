import db from "../../models/index.js";

//karena ini di join
const Biodata = db.biodata;
const Department = db.department;

//Get All
export const getBiodatas = async (req, res) => {
  try {
    const data = await Biodata.findAll({
        include: [{ model: Department, attributes: ["name_department"] }]
    }); //temukan semua data termasuk data department

    res.json({
      message: "Success GET biodata",
      data: data,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//Get by ID
export const getBiodataById = async (req, res) => {
  try {
    const { id_biodata } = req.params;
    const data = await Biodata.findByPk(id_biodata);
    if (!data) 
      return res.status(404).json({ message: "Biodata not found" });
  
    res.json({ message: "Success GET Biodata", data: data });
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
};

//POST
export const createBiodata = async (req, res) => {
  try {
    const { name_biodata, id_department } = req.body;
    if (!id_department) 
      return res.status(400).json({ message: "biodata is required" });

    const created = await Biodata.create({
      name_biodata,
      id_department,
    }); //input biodata

    res.json({
      message: "Success CREATE biodata",
      data: created,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//PUT & Update
export const updateBiodata = async (req, res) => {
  try {
    const { id_biodata } = req.params;
    const { name_biodata } = req.body;

    const data = await Biodata.findByPk(id_biodata);
    if (!data) 
      return res.status(404).json({ message: "Biodata not found" });

    await Biodata.update({ name_biodata, updatedAt: new Date() });
    res.json({ message: "Success UPDATE biodata", data: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE
export const deleteBiodata = async (req, res) => {
  try {
    const { id_biodata } = req.params;
    const data = await Biodata.findByPk(id); //cari berdasarkan ID
    if (!data) return res.status(404).json({ message: "Biodata not found" });

    await data.destroy(); //perintah hapuss
    res.json({ message: "Success DELETE biodata" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


