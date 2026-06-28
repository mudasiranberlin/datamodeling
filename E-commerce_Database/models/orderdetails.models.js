import mongoose from "mongoose";

const OrderdetailsSchema = new mongoose.Schema({
    ordernumber:{
        type: Number,
        unique: true,
        
    }

},{timestamps:true})

export const Order = mongoose.model("Order", OrderdetailsSchema)