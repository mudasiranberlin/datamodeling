import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({},{timestamps:true}) 

export const User = mongoose.model("User")