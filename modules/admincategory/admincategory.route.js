import express from 'express';
import { admincategory } from './admincategory.controller.js';
const router=express.Router();
router.get('/',admincategory);
export default router;