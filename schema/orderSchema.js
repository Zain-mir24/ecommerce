
const mongoose = require('mongoose');

const orderschema = new mongoose.Schema({
    order_id: { type: Number, required: true },
    name: { type: String, required: true },
    address: { type: String, required: true },
    postal_code: { type: Number },
});
const Order = mongoose.model('order', orderschema);
module.exports = Order;