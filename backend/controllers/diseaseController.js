const Disease = require('../models/Disease');

// Create new disease
exports.createDisease = async (req, res) => {
    try {
      const diseaseData = req.body;
  
      if (req.file) {
        diseaseData.image = `/uploads/${req.file.filename}`;
      }
  
      const newDisease = new Disease(diseaseData);
      await newDisease.save();
  
      res.status(201).json(newDisease);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
  
// Get All Diseases
exports.getDiseases = async (req, res) => {
  try {
    const diseases = await Disease.find();
    res.json(diseases);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get Single Disease
exports.getDisease = async (req, res) => {
  try {
    const disease = await Disease.findById(req.params.id);
    if (!disease) return res.status(404).json({ message: "Disease not found" });
    res.json(disease);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update Disease
exports.updateDisease = async (req, res) => {
  try {
    const disease = await Disease.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!disease) return res.status(404).json({ message: "Disease not found" });
    res.json(disease);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete Disease
exports.deleteDisease = async (req, res) => {
  try {
    const disease = await Disease.findByIdAndDelete(req.params.id);
    if (!disease) return res.status(404).json({ message: "Disease not found" });
    res.json({ message: "Disease deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
