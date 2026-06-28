import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    firstName:{
        type: String,
        lowercase: true,
        
    }

},{timestamps:true})

export const Customer = mongoose.model("Customer",customerSchema);