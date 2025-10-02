import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import homeRuter from "./modules/home/home.route.js";
import authorRouter from "./modules/author/author.route.js";
import categoryRouter from "./modules/category/category.route.js";
import singleRouter from "./modules/single/single.route.js";
import searchRouter from "./modules/search/search.route.js";
import  loginRoute from "./modules/login/login.route.js";
import dashboardRoute from "./modules/dashboard/dashboard.route.js";
import addcategoryRoute from "./modules/add-category/add-category.route.js";
import  addarticlePage from "./modules/add-article/add-article.route.js";
import adduserRute from "./modules/add-user/add-user.route.js";
import articleRoute from "./modules/article/article.route.js";
import  admincategory from "./modules/admincategory/admincategory.route.js";
import commentsRoute from "./modules/comments/comments.route.js";
import settingRoute from "./modules/settings/setting.route.js";
import updateArticle from "./modules/update-article/update-article.route.js";
import updatecategory from "./modules/update-category/update-category.route.js";
import updateuser from "./modules/update-user/update-user.route.js";
import userRoute from "./modules/user/user.route.js";

dotenv.config();
connectDB();
const app = express();

app.use("/admin/upload", express.static("admin/upload"));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));  
app.use("/", homeRuter);
app.use("/author", authorRouter);
app.use("/category", categoryRouter);
app.use("/", singleRouter);
app.use("/search", searchRouter);
app.use("/admin/login", loginRoute);
app.use("/admin/dashboard", dashboardRoute);
app.use("/admin/add-category", addcategoryRoute);
app.use("/admin/add-article", addarticlePage);
app.use("/admin/add-user", adduserRute);
app.use("/admin/article", articleRoute);
app.use("/admin/category", admincategory);
app.use("/admin/comments", commentsRoute);
app.use("/admin/settings", settingRoute);
app.use("/admin/update-article", updateArticle);
app.use("/admin/update-category", updatecategory);
app.use("/admin/update-user", updateuser);
app.use("/admin/user", userRoute);


app.use("", (req, res) => {
    res.render("404",{
        title: "News"
    });
})
app.listen(3000, () => {
    console.log("server is running");
});