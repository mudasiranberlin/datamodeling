import mongoose from "mongoose";

const productSchema= new mongoose.Schema({
    description:{
        required: true,
        type: String,
    },
    name:{
        type: String,
        required: true
    },
    productImages:{
        type: String,
    },
    price:{
        type: 
    }

},{timestamps:true})

export const Product = mongoose.model("Product",productSchema)