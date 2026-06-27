import mongoose from "mongoose";

const Subtodo_Schems = new mongoose.Schema({
    content:{
        type: String,
        lowercase: true,
        required: true
    },
    complete:{
        type: Boolean,
        default: false
    }, 

    createdBy:{
        type: mongoose.Types.
    }
 
},{timestamps:true})

export const Sub = mongoose.model("Sub",Subtodo_Schems) 