const express = require('express');
const router = express.Router();
const jwtVerify = require('../middleware/jwt');
const usersValidator = require('../middleware/validator/users.validator');
const usersController = require('../controller/users.controller');

// use jwt verification
router.use(jwtVerify);

// get user data
router.get('/', usersController.getData);

// logout
router.get('/logout', usersController.logout);

// update user data
router.patch('/update-data', usersValidator.updateData, usersController.updateUser);

// change password
router.patch('/change-password', usersValidator.newPass, usersController.changePass);

// delete user
router.delete('/delete', usersController.deleteUser);

module.exports = router;
