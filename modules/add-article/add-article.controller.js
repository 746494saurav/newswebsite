import Article from "./add-article.model.js";

export const addarticlePage = (req, res) => {
    res.render("add-article", { title: "ADMIN Panel" });
};


export const create = async (req, res) => {
  try {
    const { title, content, category } = req.body;

    // multer saves file in admin/upload
    const imagePath = req.file ? req.file.path : null;

    const newArticle = new Article({ 
      title, 
      content, 
      category, 
      image: imagePath 
    });

    await newArticle.save();
    res.redirect("/admin/add-article");
  } catch (error) {
    console.error("❌ Error saving article:", error.message);
    res.status(500).json({ message: error.message });
  }
};