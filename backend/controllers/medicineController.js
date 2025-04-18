const Medicine = require('../models/Medicine');

// Create new medicine
exports.createMedicine = async (req, res) => {
  try {
    const medicineData = req.body;

    if (req.file) {
      medicineData.image = `/uploads/${req.file.filename}`;
    }

    const newMedicine = new Medicine(medicineData);
    await newMedicine.save();

    res.status(201).json(newMedicine);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


// Get All Medicines
exports.getMedicines = async (req, res) => {
  try {
    const medicines = await Medicine.find();
    res.json(medicines);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get Single Medicine
exports.getMedicine = async (req, res) => {
  try {
    const medicine = await Medicine.findById(req.params.id);
    if (!medicine) return res.status(404).json({ message: "Medicine not found" });
    res.json(medicine);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update Medicine
exports.updateMedicine = async (req, res) => {
  try {
    const medicine = await Medicine.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!medicine) return res.status(404).json({ message: "Medicine not found" });
    res.json(medicine);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete Medicine
exports.deleteMedicine = async (req, res) => {
  try {
    const medicine = await Medicine.findByIdAndDelete(req.params.id);
    if (!medicine) return res.status(404).json({ message: "Medicine not found" });
    res.json({ message: "Medicine deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
