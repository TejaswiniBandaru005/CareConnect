const express = require('express');
const router = express.Router();
const diseaseController = require('../controllers/diseaseController');
const upload = require('../middlewares/upload');

router.post('/',upload.single('image'), diseaseController.createDisease);
router.get('/', diseaseController.getDiseases);
router.get('/:id', diseaseController.getDisease);
router.put('/:id', diseaseController.updateDisease);
router.delete('/:id', diseaseController.deleteDisease);

module.exports = router;
