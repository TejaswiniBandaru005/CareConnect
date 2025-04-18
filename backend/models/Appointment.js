const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  department: { type: String, required: true },
  ageGroup: { type: String, required: true }, // Example: "0-10", "11-20", etc.
  gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
  diseaseOrSymptoms: { type: String, required: true },
  specialization: { type: String, required: true },
  consultationFee: { type: Number, required: true },
  selectedDate: { type: Date, required: true },
  selectedTimeSlot: { type: String, required: true },
  availability: {
    type: String,
    enum: ['general', 'specialized', 'regular'],
    required: true
  },
  reason: { type: String }
});

module.exports = mongoose.model('Appointment', appointmentSchema);
