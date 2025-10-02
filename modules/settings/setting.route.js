import express from 'express';
import { settings } from './setting.controller.js';
const router=express.Router();
router.get('/',settings);
export default router;  