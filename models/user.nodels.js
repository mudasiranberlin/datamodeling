import mongoose from "mongoose";

const UserSchema= new mongoose.Schema({

    user:String,
    email:String
    

},{timestamps:true})

const User = mongoose.model("User",UserSchema)