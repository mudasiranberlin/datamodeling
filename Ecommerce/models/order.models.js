import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    OrderPrice:{
        
    }
},{timestamps})


export const Order = mongoose.model("Order",OrderSchema)