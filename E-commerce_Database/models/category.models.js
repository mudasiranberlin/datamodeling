import mongoose from "mongoose";

const CategoryScheme = new mongoose.Schema({
    categoryname:{
        
    }

},{timestamps:true})

export const Category = mongoose.model("Category",Category)