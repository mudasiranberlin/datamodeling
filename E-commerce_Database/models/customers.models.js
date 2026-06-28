import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    first

},{timestamps:true})

export const Customer = mongoose.model("Customer",customerSchema);