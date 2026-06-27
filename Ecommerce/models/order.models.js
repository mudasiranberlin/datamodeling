import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    OrderPrice:{
        type: Number,
        required: true
    },
    customer:{
        type: mongoose.Schema.Types.ObjectId,
        ref:""
    }
},{timestamps})


export const Order = mongoose.model("Order",OrderSchema)