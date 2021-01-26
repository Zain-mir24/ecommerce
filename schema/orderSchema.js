import mongoose from 'mongoose';
const orderschema= new mongoose.Schema({
    Orderid:{
        type:Number,
        required:true
    },
    orderstatus:{
        type:String,
        required:true
    },
    orderaddress:{
        type:String,
        required:true
    },
    


})

const Order = mongoose.model('Orders',orderschema)