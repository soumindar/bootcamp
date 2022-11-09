const express = require('express');
const router = express.Router();
const adminValidator = require('../../middleware/validator/admin.validator');
const adminController = require('../../controller/admin/auth.admin.controller');
const jwtVerify = require('../../middleware/jwt');

// use jwt verification
router.use(jwtVerify);

// register admin
router.post('/', adminValidator.registerData, adminController.register);

module.exports = router;