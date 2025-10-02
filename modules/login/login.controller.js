import User from "../add-user/add-user.model.js";
import bcrypt from "bcrypt";
export const loginPage = (req, res) => {
    res.render("login", { title: "Login" });
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
      return res.redirect("/admin/login");
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.redirect("/admin/login");
    }
    res.redirect("/admin/dashboard");
    
  } catch (error) {
    console.error("❌ Error logging in:", error.message);
    res.status(500).json({ message: error.message });
  }
};