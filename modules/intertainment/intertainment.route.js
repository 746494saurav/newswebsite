import exprss from 'express';
import { intertaiment } from './intertainment.controller.js';
const router=exprss.Router();
router.get('/',intertaiment);
export default router;
import mongoose from "mongoose";

router.get("/:id", async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ error: "Invalid article ID" });
  }
  const article = await Article.findById(req.params.id);
  res.json(article);
});