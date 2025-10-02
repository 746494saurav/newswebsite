import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
    type: String,               // 🔹 was Number, now String
    enum: ["author", "admin"],  // valid values
    default: "author",
  },
});

export default mongoose.model("User", userSchema);