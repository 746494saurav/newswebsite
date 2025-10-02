import expess from "express";
import { singlePage,addComment } from "./single.controller.js";
const router=expess.Router();
router.get('/:id',singlePage);
router.post('/comment',addComment);
export default router;