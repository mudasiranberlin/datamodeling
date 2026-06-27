import mongoose from "mongoose";

const SupplierSchema = new mongoose.Schema({
    companyname:{
        type:String,
        required: true,
        unique: true
    },
    contactfname:{
        type: String,
        
    }

},{timestamps:true});

export const Supplier = mongoose.model("Supplier",SupplierSchema)