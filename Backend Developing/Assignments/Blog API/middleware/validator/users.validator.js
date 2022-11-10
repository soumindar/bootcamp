const { body, validationResult } = require('express-validator');

// register data validator
const registerData = [
  body('name').notEmpty().withMessage('name cannot be empty'),
  body('username').notEmpty().withMessage('username cannot be empty'),
  body('password').isLength({min: 6}).withMessage('password must at least have 6 characters'),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: errors.array(),
        statusCode: 400
      });
    }

    next();
  }
];

// login data validator
const loginData = [
  body('username').notEmpty().withMessage('username cannot be empty'),
  body('password').notEmpty().withMessage('password cannot be empty'),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: errors.array(),
        statusCode: 400
      });
    }

    next();
  }
];

// update data validator
const updateData = [
  body('name').notEmpty().withMessage('name cannot be empty'),
  body('username').notEmpty().withMessage('username cannot be empty'),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: errors.array(),
        statusCode: 400,
        data: {}
      });
    }

    next();
  }
];

// change password validator
const newPass = [
  body('new_pass').notEmpty().withMessage('new_pass cannot be empty'),
  body('new_pass').isLength({min: 6}).withMessage('new_pass must at least have 6 characters'),
  body('confirm_pass').notEmpty().withMessage('confirm_pass cannot be empty'),
  body('confirm_pass').isLength({min: 6}).withMessage('confirm_pass must at least have 6 characters'),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: errors.array(),
        statusCode: 400,
      });
    }

    next();
  }
];

module.exports = {
  registerData,
  loginData,
  updateData,
  newPass,
};