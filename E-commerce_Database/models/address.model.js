import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    address1:{
        type: String,
        required
    }

},{timestamps:true});

export const address = mongoose.model("address",addressSchema) 