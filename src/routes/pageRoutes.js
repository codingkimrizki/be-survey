import { Router } from "express";

import {
    getPages,
    getPageByID,
    createPage,
    updatePage,
    deletePage,
} from "../controllers/pagesControllers.js";

const router = Router();

router.get("/", getPages);
router.get("/:id_page", getPageByID);
router.post("/", createPage);
router.put("/:id_page", updatePage);
router.delete("/:id_page", deletePage);

export default router;