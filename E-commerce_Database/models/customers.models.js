import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    firstNmae:{
        
    }

},{timestamps:true})

export const Customer = mongoose.model("Customer",customerSchema);