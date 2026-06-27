import mongoose from "mongoose";

const Subtodo_Schems = new mongoose.Schema({
    content:{
        type: String,
        required: true
    },
    complete:{
        type: String,
        req
    }
    
 
},{timestamps:true})

export const Sub = mongoose.model("Sub",Subtodo_Schems) 