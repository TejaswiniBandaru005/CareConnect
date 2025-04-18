const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  name: { type: String, required: true },
  image: { type: String }, // Image URL or base64
  price: { type: Number, required: true },
  billDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);
