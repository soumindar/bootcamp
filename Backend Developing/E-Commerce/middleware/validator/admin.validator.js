const { body, param, query, validationResult } = require('express-validator');

// register admin validator
const registerData = [
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

module.exports = {
  registerData,
};