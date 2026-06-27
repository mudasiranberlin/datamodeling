import mongoose from "mongoose";

const UserSchema= new mongoose.Schema({

    // one way to us modeling 

    username:String,
    email:String,
    password:String
    is 

},{timestamps:true})

const User = mongoose.model("User",UserSchema)