const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  image: { type: String }, // Image URL or base64
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  dob: { type: Date, required: true },
  age: { type: Number },
  gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
  aadhaarNumber: { type: String, required: true },
  location: { type: String, required: true },
  department: { type: String, required: true },
  specialization: { type: String, required: true },
  available_to: {
    type: String,
    enum: ['general', 'specialized', 'regular'],
    required: true
  },
  bio: { type: String },
  description: { type: String }
});

// Automatically calculate age
doctorSchema.pre('save', function (next) {
  const today = new Date();
  const birthDate = new Date(this.dob);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  this.age = age;
  next();
});

module.exports = mongoose.model('Doctor', doctorSchema);
