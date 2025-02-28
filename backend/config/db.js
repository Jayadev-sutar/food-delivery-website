import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://jaydevsutar:73260478@cluster0.4zunc.mongodb.net/food delivery web project').then(()=>console.log("DB connected"));
}