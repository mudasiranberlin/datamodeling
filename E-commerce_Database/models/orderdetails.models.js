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
        type: String,
        unique: true
    },

    total:{
        type: Number,
        required: true
    },
    size:{
        type: String,
        enum: ["XXL","XL","X","L","M","S"],
        required: true
    },
    color:{
        type: String,
        enum: ["RED","BLUE"]
    }

},{timestamps:true})

export const Order = mongoose.model("Order", OrderdetailsSchema)