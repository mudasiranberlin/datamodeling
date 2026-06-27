import mongoose from "mongoose";

const SupplierSchema = new mongoose.Schema({

},{timestamps});

export const Supplier = mongoose.model("Supplier",SupplierSchema)