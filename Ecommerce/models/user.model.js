import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        lowercase: true,
        required: true,
    },
    email:{
        
    }
},{timestamps:true});

export const User = mongoose.model("User",UserSchema) 