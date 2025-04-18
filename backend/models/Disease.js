const mongoose = require('mongoose');

const diseaseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String }, // URL or base64
  symptoms: { type: String },
  preventive_measures: { type: String },
  complication_prevention: { type: String },
  tips: { type: String }
});

module.exports = mongoose.model('Disease', diseaseSchema);
