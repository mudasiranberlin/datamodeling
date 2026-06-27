import mongoose from "mongoose";

const ShippingScheme = new mongoose.Schema({
    companyname:{
        type: String,
        lowercase: true,
        unique: true,
        required: true
    },
    phone:{
        type: 
    }
},{timestamps:true})

export const Shipping = mongoose.model("Shipping",ShippingScheme)