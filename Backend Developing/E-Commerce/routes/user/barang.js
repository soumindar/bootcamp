const express = require('express');
const router = express.Router();
const jwtVerify = require('../../middleware/jwt');
const barangValidator = require('../../middleware/validator/barang.validator');
const barangController = require('../../controller/user/barang.controller');

//use jwt verification
router.use(jwtVerify);

// get all barang
router.get('/', barangValidator.queryGetAll, barangController.getAll);

module.exports = router;