import Article from "../add-article/add-article.model.js";

export const homePage = async (req, res) => {
  try {
    // Pagination (optional)
    const page = parseInt(req.query.page) || 1; 
    const limit = 10; 
    const skip = (page - 1) * limit;

    // Fetch posts with pagination
    const articles = await Article.find()
      .sort({ createdAt: -1 }) // latest first
      .skip(skip)
      .limit(limit);

    const totalArticles = await Article.countDocuments();
    const totalPages = Math.ceil(totalArticles / limit);

    res.render("index", {
      title: "News Website",
      articles,
      currentPage: page,
      totalPages
    });
  } catch (error) {
    console.error("❌ Error loading homepage:", error.message);
    res.status(500).send("Server Error");
  }
};

export const politics = async (req, res) => {
  try {
    // Pagination (optional)
    const page = parseInt(req.query.page) || 1; 
    const limit = 10; 
    const skip = (page - 1) * limit;

    // Fetch posts with pagination
    const articles = await Article.find({ category: "Politics" })
      .sort({ createdAt: -1 }) // latest first
      .skip(skip)
      .limit(limit);

    const totalArticles = await Article.countDocuments();
    const totalPages = Math.ceil(totalArticles / limit);

    res.render("politics", {
      title: "Politics",
      articles,
      currentPage: page,
      totalPages
    });
  } catch (error) {
    console.error("❌ Error loading homepage:", error.message);
    res.status(500).send("Server Error");
  }
};

export const sports = async (req, res) => {
  try {
    // Pagination (optional)
    const page = parseInt(req.query.page) || 1; 
    const limit = 10; 
    const skip = (page - 1) * limit;

    // Fetch posts with pagination
    const articles = await Article.find({ category: "Sports" })
      .sort({ createdAt: -1 }) // latest first
      .skip(skip)
      .limit(limit);

    const totalArticles = await Article.countDocuments();
    const totalPages = Math.ceil(totalArticles / limit);

    res.render("sports", {
      title: "Sports",
      articles,
      currentPage: page,
      totalPages
    });
  } catch (error) {
    console.error("❌ Error loading homepage:", error.message);
    res.status(500).send("Server Error");
  }
};


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

export const recentpost = async (req, resp) => {
  try {
    const articles = await Article.find({})
      .sort({ createdAt: -1 })   
      .limit(2);                 
    resp.render("recentpost", { title: "Recent Post", articles });
  } catch (error) {
    console.error(" Error loading recent posts:", error.message);
    resp.status(500).send("Server Error");
  }
};

