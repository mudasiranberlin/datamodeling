import mongoose from "mongoose";

const UserSchema= new mongoose.Schema({
    username:{
        ty
    }

},{timestamps:true})

const User = mongoose.model("User",UserSchema)