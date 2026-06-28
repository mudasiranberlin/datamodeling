import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    firstNamae:{

    }

},{timestamps:true})

export const Customer = mongoose.model("Customer",customerSchema);