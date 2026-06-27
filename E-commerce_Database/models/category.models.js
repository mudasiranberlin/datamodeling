import mongoose from "mongoose";

const CategoryScheme = new mongoose.Schema({
    category

},{timestamps:true})

export const Category = mongoose.model("Category",Category)