import mongoose from "mongoose";

const adressSchema = new mongoose.Schema

 /// New concept here 
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
        type:[orderItemsSchema] // this one is second way u can see top i have define it.

    //     or you can also write like this previously use it 
    //     both are valid

    //     type:[
    //     {
    //        productId:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "product"
    // },
    // quantity:{
    //     type: Number,
    //     required: true
    // } 
    //     }]

        // new concept u have to undertand : 3:/// 32:// 45
    },

    address:{

    }
},{timestamps})


export const Order = mongoose.model("Order",OrderSchema)