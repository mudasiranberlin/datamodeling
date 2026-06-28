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
    },
    quantity:{
        type: Number,
        required: true
    },
    discount:{
        type: str
    }

},{timestamps:true})

export const Order = mongoose.model("Order", OrderdetailsSchema)