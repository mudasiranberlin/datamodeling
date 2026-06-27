import mongoose from "mongoose";

const UserSchema= new mongoose.Schema({
    username:{
        type: String,
        lowe
    }

},{timestamps:true})

const User = mongoose.model("User",UserSchema)