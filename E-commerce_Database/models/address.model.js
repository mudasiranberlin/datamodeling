import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({},{});

export const address = mongoose.model("address",addressSchema) 