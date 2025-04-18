const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  image: { type: String }, // Image URL or base64
  name: { type: String, required: true },
  quantity: { type: Number, required: true, min: 1 },
  price: { type: Number, required: true }
});

module.exports = mongoose.model('Cart', cartSchema);
