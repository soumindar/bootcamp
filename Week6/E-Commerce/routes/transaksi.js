const express = require('express');
const router = express.Router();
const transaksiValidator = require('../middleware/validator/transaksi.validator');
const transaksiController = require('../controller/transaksi.controller');
const jwtVerify = require('../middleware/jwt');

// use jwt verification
router.use(jwtVerify);

// get all transaksi
router.get('/', transaksiValidator.queryPage, transaksiController.getAll);

// get transaksi by id
router.get('/:id', transaksiValidator.paramId, transaksiController.getById);

// create transaksi
router.post('/create', transaksiValidator.createData, transaksiController.create);

module.exports = router;