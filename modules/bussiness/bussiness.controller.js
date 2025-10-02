import Article from "../add-article/add-article.model.js";
export const bussiness=(req,resp)=>{
    resp.render("bussiness", { title: "Bussiness" });
}
export const getbussiness = async (req, res) => {
  try {
    // Pagination (optional)
    const page = parseInt(req.query.page) || 1; 
    const limit = 10; 
    const skip = (page - 1) * limit;

    // Fetch posts with pagination
    const articles = await Article.find({ category: "Bussiness" })
      .sort({ createdAt: -1 }) // latest first
      .skip(skip)
      .limit(limit);

    const totalArticles = await Article.countDocuments();
    const totalPages = Math.ceil(totalArticles / limit);

    res.render("bussiness", {
      title: "Bussiness",
      articles,
      currentPage: page,
      totalPages
    });
  } catch (error) {
    console.error(" Error loading homepage:", error.message);
    res.status(500).send("Server Error");
  }
};
