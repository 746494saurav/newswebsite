 import Article from "../add-article/add-article.model.js";
 import User from "../add-user/add-user.model.js";
 export const dashboardPage = (req, res) => {
    res.render("dashboard", { title: "ADMIN Panel" });
  };
  export const totalarticles = async (req, res) => {
    try {
      const totalArticles = await Article.countDocuments();
      const totalusers = await User.countDocuments();
      res.render("dashboard", { title: "ADMIN Panel" , totalArticles, totalusers });
    } catch (error) {
      console.error("❌ Error loading homepage:", error.message);
      res.status(500).send("Server Error");
    }
  };