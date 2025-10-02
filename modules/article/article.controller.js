import Article from "../add-article/add-article.model.js";

export const article = async (req, res) => {
    try {
        const articles = await Article.find({});
        res.render("article", { title: "ADMIN Panel", articles });
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
}

export const deleteArticle = async (req, res) => {
  const id = req.params.id;

  try {
    const deletedArticle = await Article.findByIdAndDelete(id);
    // console.log(deletedArticle);
    if (!deletedArticle) {
      return res.status(404).send("Article not found");
    }

    res.redirect("/article");  // ✅ absolute path
  } catch (err) {
    console.error("❌ Error deleting article:", err.message);
    res.status(500).send("Server Error");
  }   
};
