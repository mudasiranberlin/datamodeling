import mongoose from "mongoose";

const OrderdetailsSchema = new mongoose.Schema({
    ordernumber:{
        type: Number,
        unique: true,
        lowercase: true
    },
    Price:{
        
    }

},{timestamps:true})

export const Order = mongoose.model("Order", OrderdetailsSchema)