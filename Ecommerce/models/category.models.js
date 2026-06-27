import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        uni
    }
},{timestamps:true}) 

export const Category = mongoose.model("category",categorySchema)