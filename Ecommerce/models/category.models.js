import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name:{
        type
    }
},{timestamps:true}) 

export const Category = mongoose.model("category",categorySchema)