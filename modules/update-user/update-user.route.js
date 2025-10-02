import express from 'express';
import { updateuser } from './update-user.controller.js';
const router=express.Router();
router.get('/',updateuser);
export default router;