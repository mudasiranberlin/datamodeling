import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    

},{timestamps:true});

export const address = mongoose.model("address",addressSchema) 