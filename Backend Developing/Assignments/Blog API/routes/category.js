const express = require('express');
const router = express.Router();
const jwtVerify = require('../middleware/jwt');
const categoryValidator = require('../middleware/validator/category.validator');
const categoryController = require('../controller/category.controller');

// use jwt verification
router.use(jwtVerify);

// get category
router.get('/', categoryValidator.queryData, categoryController.getData);

module.exports = router;