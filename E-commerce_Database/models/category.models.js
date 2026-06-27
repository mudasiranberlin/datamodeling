import mongoose from "mongoose";

const CategoryScheme = new mongoose.Schema({

},{timestamps:true})

export const Category = mongoose.model("Category",Category)