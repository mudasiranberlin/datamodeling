import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({},{timestamps})

OrderPrice:{
    type: 
}


export const Order = mongoose.model("Order",OrderSchema)