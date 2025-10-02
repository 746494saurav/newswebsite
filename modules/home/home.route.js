import express from "express";
import { homePage ,politics,sports} from "./home.controller.js";

const router = express.Router();
router.get("/", homePage);
router.get("/politics", politics);
router.get("/sports", sports);
export default router;
