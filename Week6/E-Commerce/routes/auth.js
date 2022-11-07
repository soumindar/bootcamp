const express = require('express');
const router = express.Router();
const usersController = require('../controller/users.controller');
const usersValidator = require('../middleware/validator/users.validator');


// register
router.post('/register', usersValidator.registerData, usersController.register);

// login
router.post('/login', usersValidator.loginData, usersController.login);

module.exports = router;