const express=require("express")

const {BlogModel}=require("../models/blog.model")

const blogRouter=express.Router()

blogRouter.post("/add",async(req,res)=>{
   const payload=req.body
   console.log(payload)
    try{

        const user=new BlogModel(payload)
        await user.save()
        res.send({"msg":"post saved"})

    }
    catch(err){
        console.log(err)
res.send({"msg":"not able to create post"})
    }
})
blogRouter.get("/",async(req,res)=>{
    
  
    try
    {
        const products=await BlogModel.find()
        res.send(products)

    }
    catch(err)
    {
        res.send({"msg":"data not found"})
    }
}



)

blogRouter.get("/:id",async(req,res)=>{
    let id=req.params.id;
    try{
        const product =await BlogModel.findById({"_id":id});
        res.send(product);
    }catch(err){
        console.log(err);
        res.send("something went wrong");
    }
})


blogRouter.patch("/update/:id",async(req,res)=>{
    let id=req.params.id
    const payload =req.body
    console.log(id)

    try
    {
await BlogModel.findByIdAndUpdate({_id:id},payload)
res.send({"msg":"updated"})
    }
    catch
    {
       res.send({"msg":"not updated"})
    }
})



blogRouter.delete("/delete/:id",async(req,res)=>{
    let id=req.params.id
    // const payload =req.body
    console.log(id)

    try
    {
await BlogModel.findByIdAndDelete({_id:id})
res.send({"msg":"deleted"})
    }
    
    catch
    {
       res.send({"msg":"not deleted"})
    }
})



module.exports={
    blogRouter
}