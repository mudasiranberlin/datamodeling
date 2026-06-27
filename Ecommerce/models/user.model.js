import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username:{
        tye
    }
},{timestamps:true});

export const User = mongoose.model("User",UserSchema) 