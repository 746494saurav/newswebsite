import e from "express";
import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
       enum: ["Politics", "Business", "Technology", "Sports", "Entertainment", "Health", "Education", "Lifestyle", "World", "Science", "Travel", "Environment"],
    },
    image: {
        type: String,
        required: true,
    },
    author:{
        type:String,
        required:true,
        enum: ["admin","author"],
        default:"admin"
    },
    Date:{
        type:Date,
        default:Date.now
    }
});

export default mongoose.model("Article", articleSchema);