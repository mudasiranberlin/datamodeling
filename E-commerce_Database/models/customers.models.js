import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({

},{timestamps:true})

export const Customer = mongoose.model