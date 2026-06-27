import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({},{timestamps})

export Order = mongoose.model("Order",OrderSchema)