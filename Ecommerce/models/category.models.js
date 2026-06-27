import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name:{
        ty
    }
},{timestamps:true}) 

export const Category = mongoose.model("category",categorySchema)