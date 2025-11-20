import db from "../../models/index.js";

const Pages = db.pages;

//Get All
export const getPages = async (req, res) => {
  try {
    const data = await Pages.findAll(); //perintah temukan
    res.json({
      message: "GET Pages",
      data: [],
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//Get By ID
export const getPageByID = async (req, res) => {
  try {
    const { id_page } = req.params;
    const data = await Pages.findByPk(id_page); //perintah find
    if (!data) 
        return res.status(404).json({ message: "Page not found" });

    res.json({
      message: "GET Page",
      data,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//POST
export const createPage = async (req, res) => {
  try {
    const {name_page} = req.body;
    if (!name_page) 
      return res.status(400).json({ message: "name_page is required" });

    const created = await Pages.create({
      name_page
    }); //perintah create

    res.status(201).json({
      message: "Success CREATE Page",
      data: created,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//PUT & UPDATE
export const updatePage = async (req, res) => {
  try {
    const { id_page } = req.params;
    const { name_page } = req.body;

    const data = await Pages.findByPk(id_page);//temukan datanya
    if(!data)
      return res.status(404).json({message: "Page not Found"})

    await data.update({
      name_page
    }) // update data

    res.json({
      message: "SUCCES UPDATE",
      data: data,
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//DELETE
export const deletePage = async (req, res) => {
  try {
    const { id_page } = req.params;
    const data = await Questions.findByPk(id_page);
    if (!data)
      return res.status(404).json({message:"Pages not Found"})

    await data.destroy(); //hapus data

    res.json({
      message: "Succes Delete Page",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};