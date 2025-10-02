import express from "express";
import { dashboardPage ,totalarticles} from "./dashboard.controller.js";  
const router=express.Router();
// router.get('/',dashboardPage);
router.get('/',totalarticles);
export default router;