import mongoose from "mongoose";

const orderItemsSchema= new mongoose.Schema({
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "product"
    },
    quantity:{
        type: Number,
        required: true
    }
})

const OrderSchema = new mongoose.Schema({
    OrderPrice:{
        type: Number,
        required: true
    },
    customer:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    orderitems:{
        type:[orderItemsSchema]

        // new concept u have to undertand : 3:/// 32:45
    }
},{timestamps})


export const Order = mongoose.model("Order",OrderSchema)