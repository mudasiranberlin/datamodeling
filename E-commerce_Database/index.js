import mongoose from "mongoose";

const SupplierSchema = new mongoose.Schema({
    companyname:{
        type:String,
        required: true,
        unique: true
    },
    

},{timestamps:true});

export const Supplier = mongoose.model("Supplier",SupplierSchema)