import mongoose from "mongoose";

const SupplierSchema = new mongoose.Schema({
    companyname:{
        type:String,
        required: true,
        unique: true
    },
    contactfname:{
        type: String,
        required: true,
    },
    contactlname:{
        type: String,
        required: true,
    },
    contacttitle:{
        type: String,
        required: true,
    },

    address:{
        type:mongoose.Schema.
    }

},{timestamps:true});

export const Supplier = mongoose.model("Supplier",SupplierSchema)