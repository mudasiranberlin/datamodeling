import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    OrderPrice:{
    type: String
}
},{timestamps})


export const Order = mongoose.model("Order",OrderSchema)