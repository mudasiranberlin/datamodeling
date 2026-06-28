import mongoose from "mongoose";

const OrderdetailsSchema = new mongoose.Schema({
    ordernumber:{
        type: Number,
        unique: true,
        lowercase: true
        required: true
    },
    price:{
        type: Number,
        unique: true,
        required: true

    }

},{timestamps:true})

export const Order = mongoose.model("Order", OrderdetailsSchema)