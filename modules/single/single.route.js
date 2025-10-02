import expess from "express";
import { singlePage,addComment,relatednews } from "./single.controller.js";
const router=expess.Router();
router.get('/:id',singlePage);
router.get('/related/:category',relatednews);
router.post('/comment',addComment);
export default router;