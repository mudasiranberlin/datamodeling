import mongoose from "mongoose";

const Subtodo_Schems = new mongoose.Schema({
    content:{
        
    }
 
},{timestamps:true})

export const Sub = mongoose.model("Sub",Subtodo_Schems) 