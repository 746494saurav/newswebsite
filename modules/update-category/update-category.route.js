import express from 'express';
import { updatecategory } from './update-category.controller.js';
const router=express.Router();
router.get('/',updatecategory);
export default router;