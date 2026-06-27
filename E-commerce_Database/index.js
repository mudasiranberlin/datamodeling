import mongoose from "mongoose";

const SupplierSchema = new mongoose.Schema({
    companyname:{
        type:String,
        required: true,
        unique: true
    },
    contactf

},{timestamps:true});

export const Supplier = mongoose.model("Supplier",SupplierSchema)