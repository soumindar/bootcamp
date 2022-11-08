const express = require('express');
const router = express.Router();
const jwtVerify = require('../middleware/jwt');
const barangValidator = require('../middleware/validator/barang.validator');
const barangController = require('../controller/barang.controller');

// use jwt verification
router.use(jwtVerify);

// get all barang
router.get('/', barangValidator.queryGetAll, barangController.getAll);

// create barang
router.post('/', barangValidator.createData, barangController.create);

// update barang
router.put('/:id', barangValidator.updateData, barangController.update);

// delete barang
router.delete('/:id', barangValidator.paramId, barangController.remove);

module.exports = router;