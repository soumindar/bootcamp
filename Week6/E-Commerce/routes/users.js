const express = require('express');
const router = express.Router();
const usersController = require('../controller/users.controller');
const usersValidator = require('../middleware/validator/users.validator');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


// register
router.post('/register', usersValidator.registerData, usersController.register);

// login
router.post('/login', usersValidator.loginData, usersController.login);

// get all user
router.get('/getall', usersValidator.queryPage, usersController.getAll);

// get user by id
router.get('/:id', usersValidator.paramId, usersController.getUserById);

// update user by id
router.put('/:id', usersValidator.updateData, usersController.updateUser);

module.exports = router;
