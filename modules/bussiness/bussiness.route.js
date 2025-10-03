import express from 'express';
import {  getBusiness } from './bussiness.controller.js';
const router=express.Router();
// router.post('/',getbussiness);
// router.get('/bussiness',bussiness);
router.get('/bussiness',getBusiness);


export default router;