import mongoose from "mongoose";

const OrderdetailsSchema = new mongoose.Schema({
    ordernumber:{
        type: Number,
        unique: true,
        lowercase: true
    },
    price:{
        type: NU

    }

},{timestamps:true})

export const Order = mongoose.model("Order", OrderdetailsSchema)