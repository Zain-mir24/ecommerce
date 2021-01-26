import mongoose from 'mongoose';
const orderschema= new mongoose.Schema({
    Orderid:{
        type:Number,
        required:true
    },
    Orderstatus:{
        type:String,
        required:true
    },
    Orderaddress:{
        type:String,
        required:true
    },
    


})

const Order = mongoose.model('Orders',orderschema)