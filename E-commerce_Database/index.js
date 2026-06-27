import mongoose from "mongoose";

const SupplierSchema = new mongoose.Schema({
    
},{});

export const Supplier = mongoose.model("Supplier",SupplierSchema)