import mongoose from "mongoose";

const ShippingScheme = new mongoose.Schema({
    companyname:{
        type: String,
        lowercase: true,
        unique: true,
        require
    }
},{timestamps:true})

export const Shipping = mongoose.model("Shipping",ShippingScheme)