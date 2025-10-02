import express from 'express';
import { comments } from './comments.controller.js';
const router=express.Router();
router.get('/',comments);
export default router;