import mongoose from "mongoose";

const OrderdetailsSchema = new mongoose.Schema({
    order

},{timestamps:true})

export const Order = mongoose.model("Order", OrderdetailsSchema)