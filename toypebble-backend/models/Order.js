// models/Order.js

const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  orderId: { type: String, required: true },
  orderDate: { type: Date, required: true },
  plan: { type: String, required: true },
  ageGroup: { type: String, required: true }
});

module.exports = mongoose.model('Order', OrderSchema);
