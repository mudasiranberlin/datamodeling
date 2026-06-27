import mongoose from "mongoose";

const Subtodo_Schems = new mongoose.Schema({
    content:{
        ty
    }
 
},{timestamps:true})

export const Sub = mongoose.model("Sub",Subtodo_Schems) 