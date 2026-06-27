import mongoose from "mongoose";

const orderItems

const OrderSchema = new mongoose.Schema({
    OrderPrice:{
        type: Number,
        required: true
    },
    customer:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    orderitems:{
        type:[]
    }
},{timestamps})


export const Order = mongoose.model("Order",OrderSchema)