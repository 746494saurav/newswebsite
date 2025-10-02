import Comment from "../single/single-comment.model.js";
export const comments =async(req,resp)=>{
    const comments = await Comment.find({});
    resp.render("comments", { title: "ADMIN Panel", comments });
    
}