
const mongoose = require('mongoose');

const orderschema = new mongoose.Schema({
    orderid: { type: String, required: true },
    name: { type: String, required: true },
    address: { type: String, required: true },
    postal_code: { type: String },
});
const Order = mongoose.model('order', orderschema);
module.exports = Order;