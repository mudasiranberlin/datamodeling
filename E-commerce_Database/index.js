import { request } from "express";
import mongoose from "mongoose";

const SupplierSchema = new mongoose.Schema({
    companyname:{
        type:String,
        request
    }

},{timestamps:true});

export const Supplier = mongoose.model("Supplier",SupplierSchema)