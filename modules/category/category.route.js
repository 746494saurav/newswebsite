import express from 'express';
import { categoryPage } from './category.controller.js';
const router=express.Router();
router.get('/',categoryPage);
export default router;