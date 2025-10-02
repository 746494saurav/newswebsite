import express from 'express';
import { getArticle } from './update-article.controller.js';
const router=express.Router();
router.get('/update-article',getArticle);

export default router;  