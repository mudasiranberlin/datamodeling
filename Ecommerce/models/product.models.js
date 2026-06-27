import mongoose from "mongoose";

const productSchema= new mongoose.Schema({
    description:{
        required: true
    }

},{timestamps:true})

export const Product = mongoose.model("Product",productSchema)