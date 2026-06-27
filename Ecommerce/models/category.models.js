import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name:{
        type: String,
        requestAnimationFrame
    }
},{timestamps:true}) 

export const Category = mongoose.model("category",categorySchema)