import db from "../../models/index.js";

const Apps = db.apps;
const Biodata = db.biodata;

//Get All
export const getApps = async (req, res) => {
  try {
    const data = await Apps.findAll();
    res.json({
      message: "Success GET apps",
      data: data,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//Get by ID
export const getAppsById = async (req, res) => {
  try {
    const { id } = req.params;
    const apps = await Apps.findByPk(id);
    if (!apps) return res.status(404).json({ message: "Apps not found" });
    res.json({ message: "Success GET Apps", data: apps });
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
};

//POST
export const createApps = async (req, res) => {
  try {
    const { name_apps, id_biodata } = req.body;
    if (!name_apps) return res.status(400).json({ message: "name_apps is required" });

    const newApps = await Apps.create({
      name_apps,
      id_biodata,
    });

    res.json({
      message: "Success CREATE Apps",
      data: newApps,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//PUT & Update
export const updateApps = async (req, res) => {
  try {
    const { id } = req.params;
    const { name_apps} = req.body;

    const apps = await Apps.findByPk(id);
    if (!apps) return res.status(404).json({ message: "Apps not found" });

    await Apps.update(name_apps);
    res.json({ message: "Success UPDATE apps", data: apps });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE
export const deleteApps = async (req, res) => {
  try {
    const { id } = req.params;
    const apps = await Apps.findByPk(id);
    if (!apps) return res.status(404).json({ message: "Apps not found" });

    await Apps.destroy();
    res.json({ message: "Success DELETE Apps" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


