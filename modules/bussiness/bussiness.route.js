import express from 'express';
import { bussiness, getbussiness } from './bussiness.controller.js';
const router=express.Router();
// router.post('/',getbussiness);
router.get('/bussiness',bussiness);
router.get('/',getbussiness);


export default router;