import mongoose from "mongoose";

const ShippingScheme = new mongoose.Schema({
    companyname:{
        
    }
},{timestamps:true})

export const Shipping = mongoose.model("Shipping",ShippingScheme)