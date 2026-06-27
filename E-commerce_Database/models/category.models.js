import mongoose from "mongoose";

const CategoryScheme = new mongoose.Schema({
    categoryname:{
        type: String,
        lowercase: true,
        req
    }

},{timestamps:true})

export const Category = mongoose.model("Category",Category)