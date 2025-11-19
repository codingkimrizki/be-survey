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


export const createApps = async (req, res) => {
  try {
    const { id_biodata, id_master_apps } = req.body; // id_master_apps diharapkan array
    if (!id_master_apps || !Array.isArray(id_master_apps) || id_master_apps.length === 0) {
      return res.status(400).json({ message: "id_master_apps harus berupa array dan tidak kosong" });
    }

    const newApps = await Promise.all(
      id_master_apps.map(appId => Apps.create({ id_biodata, id_master_apps: appId }))
    );

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
    const { id_master_apps} = req.body;

    const apps = await Apps.findByPk(id);
    if (!apps) return res.status(404).json({ message: "Apps not found" });

    await Apps.update(id_master_apps);
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


