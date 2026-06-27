import mongoose from "mongoose";

const SupplierSchema = new mongoose.Schema({
    

},{timestamps:true});

export const Supplier = mongoose.model("Supplier",SupplierSchema)