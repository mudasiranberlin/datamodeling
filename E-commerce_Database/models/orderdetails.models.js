import mongoose from "mongoose";

const OrderdetailsSchema = new mongoose.Schema({
    product

},{timestamps:true})

export const Order = mongoose.model("Order", OrderdetailsSchema)