import mongoose from "mongoose";

const SupplierSchema = new mongoose.Schema({
    companyname:{
        tye
    }

},{timestamps:true});

export const Supplier = mongoose.model("Supplier",SupplierSchema)