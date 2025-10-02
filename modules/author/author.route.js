import express from 'express';
import { authorPage } from './author.controller.js';
const router=express.Router();
router.get('/',authorPage);
export default router;