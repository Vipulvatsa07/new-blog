const {UserModel}=require("../models/user.model")
const express=require("express")

const userRouter=express.Router()


userRouter.post("/register", async(req,res)=>{
     const { firstname, lastname, email, password}=req.body;
try {
    const user = new UserModel({
        firstname,
        lastname,
        email,
        password
     })
     await user.save()
     res.send("user registered")
}
catch(err){
    res.send({ msg: "not registered" });
}
     
      
})

userRouter.post("/login", async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await UserModel.findOne({ email });
      console.log(user);
  
      if (user && user.password===password) {

        res.send({ "msg": "login successfull"})

      }
      else {
        res.send({ "msg": "please type correct user or password" });
      }
    }
    catch (err) {
        console.log("something went wrong while login");
      }
    })


    // userRouter.post("/login", async (req, res) => {
    //     const { email, password } = req.body;
      
    //     try {
    //       const user = await UserModel.findOne({ email });
    //           console.log(user,"user")
    //       if (user && user.password === password) {
    //         res.send({ msg: "Login successful" });
    //       } else {
    //         res.send({ msg: "Please provide correct email or password" });
    //       }
    //     } catch (err) {
    //       console.log("Something went wrong while login", err);
    //       res.send({ msg: "An error occurred while logging in" });
    //     }
    // });
    
module.exports={
    userRouter
}