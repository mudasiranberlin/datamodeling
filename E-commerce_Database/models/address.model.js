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
        required: true,
        default:0
    },

    country:{
        type: String,
        enum: ["germany","india","paris"],
        default: "jammu"
    },

    phone:{
        type: Number,
        required:true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    url:{
        type:String,
        lowercase: true
    },
    paymentMethods:{
        type:str
    }

},{timestamps:true});

export const address = mongoose.model("address",addressSchema) 