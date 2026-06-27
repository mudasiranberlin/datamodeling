import mongoose from "mongoose";

const SupplierSchema = new mongoose.Schema({
    companyname:{
        type:String,
        required: true,
        unique: true
    },
    contact

},{timestamps:true});

export const Supplier = mongoose.model("Supplier",SupplierSchema)