import express from 'express';
import { adduserPage, saveUser } from './add-user.controller.js';
const router=express.Router();
router.get('/',adduserPage);
router.post('/',saveUser);
export default router;