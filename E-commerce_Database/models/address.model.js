import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    address1:{
        type: String,
        required: true
    },
    address2:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    address2:{
        type: String,
        enum: ["jammu","Kashmir","Delhi"],
        default: "jammu"
    },
    postalcode:{
        type: Number,
        enum: ["jammu","Kashmir","Delhi"],
        default: "jammu"
    },
},{timestamps:true});

export const address = mongoose.model("address",addressSchema) 