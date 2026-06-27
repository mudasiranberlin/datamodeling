import mongoose from "mongoose";

const orderItemsSchema= new mongoose.Schema({
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "product"
    },
    quantity:{
        
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
        type:[]
    }
},{timestamps})


export const Order = mongoose.model("Order",OrderSchema)