import mongoose from "mongoose";

const CategoryScheme = new mongoose.Schema({
    Category

},{timestamps:true})

export const Category = mongoose.model("Category",Category)