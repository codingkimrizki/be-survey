import db from "../../models/index.js";

const Apps = db.apps;

//Get All
export const getApps = async (req, res) => {
  try {
    const data = await Apps.findAll(); //temukan Apps
    res.json({
      message: "Success GET Apps",
      data: data,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//Get by ID
export const getAppById = async (req, res) => {
  try {
    const { id_app } = req.params;
    const data = await Apps.findByPk(id_app); //temukan by ID

    if (!data) 
      return res.status(404).json({ message: "Apps not found" });

    res.json({ message: "Success GET Apps", data: data });
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
};

//POST
export const createApp = async (req, res) => {
  try {
    const { id_biodata, id_master_apps } = req.body;

    if (!id_master_apps || !Array.isArray(id_master_apps)) {
      return res.status(400).json({ message: "input must be an array" });
    }

    const created = await Promise.all(
      id_master_apps.map(appId => 
        Apps.create({
          id_biodata,
          id_master_apps: appId
        })
      )
    );

    res.status(201).json({
      message: "Success CREATE Apps",
      data: created
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};



//PUT & Update
export const updateApp = async (req, res) => {
  try {
    const { id_apps } = req.params;
    const { id_master_apps, id_biodata} = req.body;

    const data = await Apps.findByPk(id_apps);
    if (!data) 
      return res.status(404).json({ message: "App not found" });

    await Apps.update({
      id_master_apps,
      id_biodata,
    });
    res.json({ 
      message: "Success UPDATE apps", 
      data: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE
export const deleteApp = async (req, res) => {
  try {
    const { id_apps } = req.params;
    const data = await Apps.findByPk(id_apps); //temukan data dulu
    if (!data) 
      return res.status(404).json({ message: "App not found" });

    await Apps.destroy(); //hapus data berdasarkan id_apps
    res.json({ 
      message: "Success DELETE App"});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


