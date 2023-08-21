const express=require("express")
const {connection}=require("./config/db")
const {userRouter}=require("./routes/UserRoute")
const { blogRouter } = require("./routes/BlogRoute")
const cors = require("cors");
require("dotenv").config()

const app=express()

app.use(express.json())
app.use(cors());

// Middleware to parse incoming JSON data.

// app.use(express.json()); 

app.get("/", (req,res)=>{
   res.send("Home Page")
});

app.use("/user",userRouter)
app.use("/blog",blogRouter)

app.listen(process.env.PORT,()=>{
    connection.then((res)=>console.log("connected to db")).catch((err)=>{
        console.log("err")
        console.log("trouble in connecting to db")
    })
    console.log("server has started at port" ,process.env.PORT)
})