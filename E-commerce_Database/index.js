import mongoose from "mongoose";

const SupplierSchema = new mongoose.Schema({
    com

},{timestamps:true});

export const Supplier = mongoose.model("Supplier",SupplierSchema)