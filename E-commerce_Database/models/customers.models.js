import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    firstName:{
        type: String,
        lowercase: true,
        required: true,
        unique: true
    },
    LastName:{
        type: String,
        lowercase: true,
        required: true,
        unique: true
    },
    class:{
        type: String,
        lowercase: true,
        required: true,
        
    }

},{timestamps:true})

export const Customer = mongoose.model("Customer",customerSchema);