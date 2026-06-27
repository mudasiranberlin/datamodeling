import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    OrderPrice:{
        type: Number,
        required: tru
    }
},{timestamps})


export const Order = mongoose.model("Order",OrderSchema)