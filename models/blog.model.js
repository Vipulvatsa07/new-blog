const mongoose=require("mongoose")

const blogSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    blogpost:{
        type:String,
        required:true
    }
})

const BlogModel=mongoose.model("blog",blogSchema);
// const UserModel=mongoose.model("user",userSchema);


module.exports={
    BlogModel
}