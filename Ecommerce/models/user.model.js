import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username:{
        name:t
    }
},{timestamps:true});

export const User = mongoose.model("User",UserSchema) 