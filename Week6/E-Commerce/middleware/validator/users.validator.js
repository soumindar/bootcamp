const { body, param, query, validationResult } = require('express-validator');


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

const paramId = [
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

module.exports = {
  registerData,
  loginData,
  queryPage,
  paramId,
  updateData,
}