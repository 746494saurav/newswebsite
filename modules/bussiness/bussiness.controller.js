import Article from "../add-article/add-article.model.js";



export const getBusiness = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; 
    const limit = 10; 
    const skip = (page - 1) * limit;

    // Fetch posts with pagination
    const articles = await Article.find({ category: "Politics" })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    // Count only Politics articles
    const totalArticles = await Article.countDocuments({ category: "Politics" });
    const totalPages = Math.ceil(totalArticles / limit);

    res.render("politics", {
      title: "Politics",
      articles,
      currentPage: page,
      totalPages
    });
  } catch (error) {
    console.error("❌ Error loading politics page:", error.message);
    res.status(500).send("Server Error");
  }
};

