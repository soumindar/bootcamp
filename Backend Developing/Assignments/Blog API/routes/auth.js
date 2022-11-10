const express = require('express');
const router = express.Router();
const usersValidator = require('../middleware/validator/users.validator');
const usersController = require('../controller/users.controller');

// register
router.post('/register', usersValidator.registerData, usersController.register);

// login
router.post('/login', usersValidator.loginData, usersController.login);

module.exports = router;