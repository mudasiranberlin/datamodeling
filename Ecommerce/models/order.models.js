import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({},{timestamps})

OrderPrice:{

}


export const Order = mongoose.model("Order",OrderSchema)