import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({},{timestamps})

OrderPrice:{
    type: String
}


export const Order = mongoose.model("Order",OrderSchema)