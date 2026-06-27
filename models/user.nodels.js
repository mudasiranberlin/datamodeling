import mongoose from "mongoose";

const UserSchema= new mongoose.Schema({
    username:{
        
    }

},{timestamps:true})

const User = mongoose.model("User",UserSchema)