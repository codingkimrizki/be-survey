import db from "../../models/index.js";

const MasterApps = db.masterApps;

//Get All
export const getMasterApps = async (req, res) => {
  try {
    const masterApps = await MasterApps.findAll();
    res.json({
      message: "Success GET Master Apps",
      data: masterApps,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//Get by ID
export const getMasterAppsById = async (req, res) => {
  try {
    const { id } = req.params;
    const masterApp = await MasterApps.findByPk(id);
    if (!masterApp) return res.status(404).json({ message: "Master App not found" });
    res.json({ message: "Success GET Master App", data: masterApp });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//POST
export const createMasterApps = async (req, res) => {
  try {
    const { name_master_apps } = req.body;
    if (!name_master_apps) return res.status(400).json({ message: "Name of Master App is required" });

    const newMasterApp = await MasterApps.create({ name_master_apps });

    res.json({
      message: "Success CREATE Master App",
      data: newMasterApp,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//PUT & Update
export const updateMasterApps = async (req, res) => {
  try {
    const { id } = req.params;
    const { name_master_apps } = req.body;

    const masterApp = await MasterApps.findByPk(id);
    if (!masterApp) return res.status(404).json({ message: "Master App not found" });

    await masterApp.update({ name_master_apps });
    res.json({ message: "Success UPDATE Master App", data: masterApp });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE
export const deleteMasterApps = async (req, res) => {
  try {
    const { id } = req.params;
    const masterApp = await MasterApps.findByPk(id);
    if (!masterApp) return res.status(404).json({ message: "Master App not found" });

    await masterApp.destroy();
    res.json({ message: "Success DELETE Master App" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
