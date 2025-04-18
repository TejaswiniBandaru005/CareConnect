const mongoose = require('mongoose');

const medicineSchema = new mongoose.Schema({
  image: { type: String }, // URL or base64 string
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String }
});

module.exports = mongoose.model('Medicine', medicineSchema);
