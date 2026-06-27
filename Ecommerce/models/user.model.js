import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        lowercase: true,
        required: true,
        uni
    },
    email:{
        type: String,
        lowercase: true,
        required: true
    },
    password:{
        type: String,
        required: true
    }
},{timestamps:true});

export const User = mongoose.model("User",UserSchema) 