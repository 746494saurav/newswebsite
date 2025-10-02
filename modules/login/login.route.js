import express from 'express';
import { loginPage, login } from './login.controller.js';
const router=express.Router();
router.get('/',loginPage);
router.post('/',login);
export default router;