
import Article from "../add-article/add-article.model.js";
import Comment from "../single/single-comment.model.js";
export const singlePage = async (req, res) => {
  try {
    const articleId = req.params.id; // get id from URL
    const article = await Article.findById(articleId);

    if (!article) {
      return res.status(404).send("Article not found");
    }

    res.render("single", {
      title: "News",
      article
    });
  } catch (error) {
    console.error("❌ Error loading article:", error.message);
    res.status(500).send("Server Error");
  }
};

export const relatednews =async(req,res)=>{
  try {
  
    const relatedArticles = await Article.find({id: req.params });
    console.log(relatedArticles);
    res.render("related-post", {
      title: "Related News",
      relatedArticles
    });
  } catch (error) {
    console.error("❌ Error loading related news:", error.message);
    res.status(500).send("Server Error");
  }
}

export const addComment = async (req, res) => {
  try {
    const comment = new Comment(req.body);
    await comment.save();
    res.redirect(`/`);
  } catch (error) {
    console.error("❌ Error adding comment:", error.message);
    res.status(500).send("Server Error");
  }
};
