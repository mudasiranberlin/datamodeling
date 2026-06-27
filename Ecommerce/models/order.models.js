import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    OrderPrice:{
        tye
    }
},{timestamps})


export const Order = mongoose.model("Order",OrderSchema)