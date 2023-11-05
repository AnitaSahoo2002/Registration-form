require("dotenv").config();
const express=require("express");
const path=require("path");
const app=express();
const PORT=process.env.PORT || 8001;

const userRoute=require("./routes/user");

var mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log('MongoDB connected');
    })
    .catch((error) => {
      console.error('Error connecting to MongoDB:', error);
    });


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