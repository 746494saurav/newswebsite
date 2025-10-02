import mongoose from "mongoose";
import Article from "../add-article/add-article.model.js";

const commentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    articleId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Article",
    },
    status:{
        type: String,
        enum: ["pending", "approved", "rejected"],
        default: "approved",
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.model("Comment", commentSchema);