const {Router}=require("express");
const User=require("../models/user");
const router=Router();
const path=require("path");

router.post("/submit",async(req,res)=>{
    const {firstName,lastName,email,password,contactno1, Address,Address2}=req.body;
    await User.create({
        firstName: firstName,
        lastName:lastName,
        email: email,
        password:password,
        contactno1:contactno1,
        Address:Address,
        Address2:Address2
    });
    res.render("submit");
})
    router.get("/signin",(req,res)=>{
     res.render("signin")
    })
    router.post("/signin",(req,res)=>{
        const {email,pwd}=req.body;
        const user=this.findOne({email});
        console.log(user.password);
        console.log(pwd);
        if(pwd===user.password){
            res.render("profile");
        }
        else{
            res.end("Wrong email or password");
        }
    })

    
module.exports=router;