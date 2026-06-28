import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    firstName:{
        
    }

},{timestamps:true})

export const Customer = mongoose.model("Customer",customerSchema);