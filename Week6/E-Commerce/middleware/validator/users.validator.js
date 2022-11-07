const { body, param, query, validationResult } = require('express-validator');


// register data validator
const registerData = [
  body('nama').notEmpty().withMessage('name cannot be empty'),
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

// query pagination validator
const queryPage = [
  query('pagination').optional().isInt({min: 1}).withMessage('pagination must be integer bigger than 0'),
  query('page').optional().isInt({min: 1}).withMessage('page must be integer bigger than 0'),
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

// param id validator for pagination
const paramIdPagination = [
  param('id').notEmpty().withMessage('id cannot be empty'),
  param('id').isInt().withMessage('id must be integer'),
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

// update data validator
const updateData = [
  param('id').isInt({min: 1}).withMessage('id must be integer bigger than 0'),
  body('nama').notEmpty().withMessage('name cannot be empty'),
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

// param id validator for delete user
const paramIdDelete = [
  param('id').notEmpty().withMessage('id cannot be empty'),
  param('id').isInt().withMessage('id must be integer'),
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
  queryPage,
  paramIdPagination,
  updateData,
  paramIdDelete,
}