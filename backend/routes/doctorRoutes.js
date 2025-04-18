const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');
const upload = require('../middlewares/upload');

router.post('/',upload.single('image'), doctorController.createDoctor);
router.get('/', doctorController.getDoctors);
router.get('/:id', doctorController.getDoctor);
router.put('/:id', doctorController.updateDoctor);
router.delete('/:id', doctorController.deleteDoctor);

module.exports = router;
