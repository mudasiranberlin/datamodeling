import mongoose from "mongoose";

const UserSchema= new mongoose.Schema({
    username:{
        type: String,
        lowercase: 
    }

},{timestamps:true})

const User = mongoose.model("User",UserSchema)