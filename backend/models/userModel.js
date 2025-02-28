import mongoose from "mongoose";


const userSceme = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    cartDate:{type:Object,default:{}}
},{minimize:false})

const userModel = mongoose.model.user || mongoose.model("user",userSceme);
export default userModel;