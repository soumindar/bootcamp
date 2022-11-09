const express = require('express');
const router = express.Router();
const transaksiValidator = require('../../middleware/validator/transaksi.validator');
const transaksiController = require('../../controller/user/transaksi.controller');
const jwtVerify = require('../../middleware/jwt');
const adminVerify = require('../../middleware/admin.verify');

// use jwt verification
router.use(jwtVerify);

// get all transaksi
router.get('/', adminVerify, transaksiValidator.queryPage, transaksiController.getAll);

// get transaksi by id
router.get('/:id', adminVerify, transaksiValidator.paramId, transaksiController.getById);

module.exports = router;