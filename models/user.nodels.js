import mongoose from "mongoose";

const UserSchema= new mongoose.Schema({
    username:{
        type: String,
        lowercase: true,
        unique: true,
        required: true
    },
    password:{
        type:String
    }

},{timestamps:true})

const User = mongoose.model("User",UserSchema)