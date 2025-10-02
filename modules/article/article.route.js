import express from 'express';
import { article,deleteArticle } from './article.controller.js';
const router=express.Router();
router.get('/',article);
router.delete('/delete-article/:id',deleteArticle);

export default router;