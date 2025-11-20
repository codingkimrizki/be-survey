import db from "../../models/index.js";

const MasterApps = db.master_apps;

//Get All
export const getMasterApps = async (req, res) => {
  try {
    const data = await MasterApps.findAll();
    res.json({
      message: "Success GET Master Apps",
      data: data,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//Get by ID
export const getMasterAppById = async (req, res) => {
  try {
    const { id_master_apps } = req.params;
    const data = await MasterApps.findByPk(id_master_apps);
    if (!data) 
      return res.status(404).json({ message: "Master App not found" });
    res.json({ message: "Success GET Master App", data: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//POST
export const createMasterApp = async (req, res) => {
  try {
    const { name_master_apps } = req.body;
    if (!name_master_apps) 
      return res.status(400).json({ message: "Name of Master App is required" });

    const created = await MasterApps.create({ name_master_apps });

    res.json({
      message: "Success CREATE Master App",
      data: created,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//PUT & Update
export const updateMasterApp = async (req, res) => {
  try {
    const { id_master_apps } = req.params;
    const { name_master_apps } = req.body;

    const data = await MasterApps.findByPk(id_master_apps);
    if (!data) 
      return res.status(404).json({ message: "Master App not found" });

    await MasterApps.update({ name_master_apps }); //update
    res.json({ 
      message: "Success UPDATE Master App", 
      data: data,
     });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE
export const deleteMasterApp = async (req, res) => {
  try {
    const { id_master_apps } = req.params;
    const data = await MasterApps.findByPk(id_master_apps);
    if (!data) 
      return res.status(404).json({ message: "Master App not found" });

    await MasterApps.destroy(); //hapus
    res.json({ message: "Success DELETE Master App" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
