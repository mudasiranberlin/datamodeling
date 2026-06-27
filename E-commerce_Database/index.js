import mongoose from "mongoose";

const SupplierSchema = new mongoose.Schema({
    companyname:{
        type:String,
        req
    }

},{timestamps:true});

export const Supplier = mongoose.model("Supplier",SupplierSchema)