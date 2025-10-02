import express from 'express';
import { addcategoryPage } from './add-category.controller.js';
const router=express.Router();
router.get('/',addcategoryPage);
export default router;