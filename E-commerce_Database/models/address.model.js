import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    address1:{
        type: String,
        required: true
    }
    address1:{
        type: String,
        required: true
    }

},{timestamps:true});

export const address = mongoose.model("address",addressSchema) 