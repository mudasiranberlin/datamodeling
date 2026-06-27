import mongoose from "mongoose";

const UserSchema= new mongoose.Schema({

    user:

},{timestamps:true})

const User = mongoose.model("User",UserSchema)