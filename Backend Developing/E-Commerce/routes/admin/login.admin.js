const express = require('express');
const router = express.Router();
const usersValidator = require('../../middleware/validator/users.validator');
const adminController = require('../../controller/admin/auth.admin.controller');

// login
router.post('/', usersValidator.loginData, adminController.login);

module.exports = router;