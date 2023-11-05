const {Schema,model}=require('mongoose');
const userSchema=new Schema({
    firstName: {
       type:String,
       required:true,
    },
    lastName: {
        type:String,
        required:false,
     },    

    email:{
       type:String,
       required:true,
       unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    contactno1:{
        type:Number,
        required:false,
    },
    contactno2:{
        type:Number,
        required:false, 
    },
    Address:{
        type:String,
        required:false,
    },
    Address2:{
        type:String,
        required:false,
    },

},{
    timestamps:true
});
const User=model('user',userSchema);

module.exports=User;