import mongoose from "mongoose";

const CategoryScheme = new mongoose.Schema({
    categoryname:{
        type: String,
        lowercase: true,
        required: true
    },
    description:{
        type: String,
        lowercase: true,
        required: true
    },
    


},{timestamps:true})

export const Category = mongoose.model("Category",Category)