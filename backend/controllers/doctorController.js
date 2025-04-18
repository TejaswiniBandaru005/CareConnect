const Doctor = require('../models/Doctor');

// Create Doctor
exports.createDoctor = async (req, res) => {
  try {
    const doctorData = req.body;

    // If an image was uploaded, store its path
    if (req.file) {
      doctorData.image = `/uploads/${req.file.filename}`; // relative path to image
    }

    const newDoctor = new Doctor(doctorData);
    await newDoctor.save();

    res.status(201).json(newDoctor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


// Get All Doctors
exports.getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get Single Doctor
exports.getDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    if (!doctor) return res.status(404).json({ message: "Doctor not found" });
    res.json(doctor);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update Doctor
exports.updateDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!doctor) return res.status(404).json({ message: "Doctor not found" });
    res.json(doctor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete Doctor
exports.deleteDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findByIdAndDelete(req.params.id);
    if (!doctor) return res.status(404).json({ message: "Doctor not found" });
    res.json({ message: "Doctor deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
