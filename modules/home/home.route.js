import express from "express";
import { homePage ,politics,sports,getbussiness} from "./home.controller.js";

const router = express.Router();
router.get("/", homePage);
router.get("/politics", politics);
router.get("/sports", sports);
router.get("/bussiness", getbussiness);
export default router;
