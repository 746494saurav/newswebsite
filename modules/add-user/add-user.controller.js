import User from "../add-user/add-user.model.js";
import bcrypt from "bcrypt";
export const adduserPage = (req, res) => {
    res.render("add-user", { title: "ADMIN Panel" });
};

export const saveUser = async (req, res) => {
  try {
    const password = await bcrypt.hash(req.body.password, 10);
    const { name, username, email, role } = req.body;
    

    const newUser = new User({ name, username, email, password, role });
    await newUser.save();

    res.redirect("/admin/add-user");
  } catch (error) {
    console.error("❌ Error saving user:", error.message);
    res.status(500).json({ message: error.message });
  }
};

