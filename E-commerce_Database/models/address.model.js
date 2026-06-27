import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    address1:{
        type:{}
    }

},{timestamps:true});

export const address = mongoose.model("address",addressSchema) 