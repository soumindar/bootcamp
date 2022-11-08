const { body, param, query, validationResult } = require('express-validator');

// get all validator
const queryGetAll = [
  query('pagination').optional().isInt({min: 1}).withMessage('pagination must be integer larger than 0'),
  query('page').optional().isInt({min: 1}).withMessage('page must be integer larger than 0'),
  query('order').optional().matches(/^((asc)|(desc))$/).withMessage('order can only be "asc" or "desc"'),
  query('start_harga').optional().isInt({min: 0}).withMessage('start_harga must be integer larger or equal 0'),
  query('end_harga').optional().isInt({min: 0}).withMessage('end_harga must be integer larger or equal 0'),
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

const createData = [
  body('nama').notEmpty().withMessage('nama cannot be empty'),
  body('harga').notEmpty().withMessage('harga cannot be empty'),
  body('harga').isInt({min: 0}).withMessage('harga must be integer larger or equal 0'),
  body('stok').notEmpty().withMessage('stok cannot be empty'),
  body('stok').isInt({min: 0}).withMessage('stok must be integer larger or equal 0'),
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

const updateData = [
  param('id').notEmpty().withMessage('id cannot be empty'),
  param('id').isInt({min: 1}).withMessage('id must be integer larger than 0'),
  body('nama').notEmpty().withMessage('nama cannot be empty'),
  body('harga').notEmpty().withMessage('harga cannot be empty'),
  body('harga').isInt({min: 0}).withMessage('harga must be integer larger or equal 0'),
  body('stok').notEmpty().withMessage('stok cannot be empty'),
  body('stok').isInt({min: 0}).withMessage('stok must be integer larger or equal 0'),
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
  param('id').isInt({min: 1}).withMessage('id must be integer larger than 0'),
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
  queryGetAll,
  createData,
  updateData,
  paramId
};