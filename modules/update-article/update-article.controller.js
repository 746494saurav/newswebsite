import Article from "../add-article/add-article.model.js";
export const getArticle = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    
    if (!article) return res.status(404).send("Article not found");

    res.render("update-article", { article , title: "ADMIN Panel" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};
// POST update article
export const updateArticle = async (req, res) => {
  try {
    const { title, content, category } = req.body;
    const updateData = { title, content, category };

    // if new image uploaded
    if (req.file) {
      updateData.image = "/uploads/" + req.file.filename;
    }

    await Article.findByIdAndUpdate(req.params.id, updateData);

    res.redirect("/article/" + req.params.id); // redirect to single article page
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};