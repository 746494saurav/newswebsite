import express from 'express';
import { searchPage } from './search.controller.js';
const router=express.Router();
router.get('/',searchPage);
export default router;