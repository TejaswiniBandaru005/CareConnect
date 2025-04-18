const express = require('express');
const router = express.Router();
const medicineController = require('../controllers/medicineController');
const upload = require('../middlewares/upload');

router.post('/',upload.single('image'), medicineController.createMedicine);
router.get('/', medicineController.getMedicines);
router.get('/:id', medicineController.getMedicine);
router.put('/:id', medicineController.updateMedicine);
router.delete('/:id', medicineController.deleteMedicine);

module.exports = router;
