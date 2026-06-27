import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({},{timestamps})

orderPrice:{
    
}


export const Order = mongoose.model("Order",OrderSchema)