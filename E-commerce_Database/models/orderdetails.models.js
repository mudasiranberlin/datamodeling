import mongoose from "mongoose";

const OrderdetailsSchema = new mongoose.Schema({

},{timestamps:true})

export const Order = mongoose.model