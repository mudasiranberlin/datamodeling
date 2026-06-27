import mongoose from "mongoose";

const UserSchema= new mongoose.Schema({
    username:{
        type: String,
        lowercase: true,
        unique: true,
        required: true
    },
    password:{
        type: String,
        required: true,
    },
    email:{
        ty
    }

},{timestamps:true})

const User = mongoose.model("User",UserSchema)