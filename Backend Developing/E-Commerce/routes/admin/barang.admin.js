const express = require('express');
const router = express.Router();
const jwtVerify = require('../../middleware/jwt');
const adminVerify = require('../../middleware/admin.verify');
const barangValidator = require('../../middleware/validator/barang.validator');
const barangController = require('../../controller/user/barang.controller');

// use jwt verification
router.use(jwtVerify);

// get all barang
router.get('/', barangValidator.queryGetAll, barangController.getAll);

// create barang
router.post('/', adminVerify, barangValidator.createData, barangController.create);

// update barang
router.put('/:id', adminVerify, barangValidator.updateData, barangController.update);

// delete barang
router.delete('/:id', adminVerify, barangValidator.paramId, barangController.remove);

module.exports = router;