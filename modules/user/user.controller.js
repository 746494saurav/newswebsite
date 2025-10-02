import User from "../add-user/add-user.model.js";
export const user = async (req, res) => {
  try {
    const users = await User.find({});
    res.render("user", { 
      title: "ADMIN Panel", 
      users 
    });
    
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};
