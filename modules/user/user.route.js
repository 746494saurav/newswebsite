import express from 'express';
import { user } from './user.controller.js';
const router=express.Router();
router.get('/',user);
export default router;