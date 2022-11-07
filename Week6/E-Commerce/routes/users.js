const express = require('express');
const router = express.Router();
const usersController = require('../controller/users.controller');
const usersValidator = require('../middleware/validator/users.validator');
const jwtVerify = require('../middleware/jwt');

// use jwt verification
router.use(jwtVerify);

// get all user
router.get('/getall', usersValidator.queryPage, usersController.getAll);

// get user by id
router.get('/:id', usersValidator.paramIdPagination, usersController.getUserById);

// update user by id
router.put('/edit', usersController.updateUser);

// delete user by id
router.delete('/remove', usersController.deleteUser);


module.exports = router;
