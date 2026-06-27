import mongoose from "mongoose";

const Subtodo_Schems = new mongoose.Schema({
    content:{
        type: String,
        required: true
    },
    complete:{
        type: String,
        required: true
    },
    createdBy:{
        type: mongoose.Schema.
    }
    
 
},{timestamps:true})

export const Sub = mongoose.model("Sub",Subtodo_Schems) 