import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
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
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },

    subtodos:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ] // Array of Sub Todos 

},{timestamps:true}) 
export const User = mongoose.model("User",TodoSchema);