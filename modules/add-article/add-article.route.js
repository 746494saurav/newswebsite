import express from 'express';
import { addarticlePage, create } from './add-article.controller.js';
import { upload } from "../../middlewares/upload.js";
const router=express.Router();
router.get('/',addarticlePage);
router.post("/", upload.single("image"), create);

export default router;