const express=require("express");
const path=require("path");
const app=express();
const PORT=8001;
const userRoute=require("./routes/user");
const mongoose=require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/form")
.then(()=>console.log("mongodb connected"));

//middlewares
app.set("view engine","ejs");
app.set("views",path.resolve("./views"));
app.use(express.urlencoded({extended: false}));

app.get("/",(req,res)=>{
    res.render("form");
})
app.use("/user",userRoute);
// app.post("/user/submit",(req,res)=>{
//     res.redirect("/");
// })
app.listen(PORT,()=>console.log("server connected"));