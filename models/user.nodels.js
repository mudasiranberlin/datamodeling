import mongoose from "mongoose";

const UserSchema= new mongoose.Schema({

    // one way to us modeling 

    user:String,
    email:String,
    password:String

},{timestamps:true})

const User = mongoose.model("User",UserSchema)