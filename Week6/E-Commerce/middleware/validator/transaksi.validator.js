const { body, param, query, validationResult } = require('express-validator');

// query pagination validator
const queryPage = [
  query('pagination').optional().isInt({min: 1}).withMessage('pagination must be integer bigger than 0'),
  query('page').optional().isInt({min: 1}).withMessage('page must be integer bigger than 0'),
  query('start_date').optional().isDate().withMessage('start_date format is invalid'),
  query('end_date').optional().isDate().withMessage('end_date format is invalid'),
  query('order').optional().matches(/^((asc)|(desc))$/).withMessage('order can only be "asc" or "desc"'),
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

// param get by id validator 
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

const createData = [
  body('barang_id').notEmpty().withMessage('barang_id cannot be empty'),
  body('barang_id').isInt({min: 1}).withMessage('barang_id must be integer larger than 0'),
  body('jumlah').notEmpty().withMessage('jumlah cannot be empty'),
  body('jumlah').isInt({min: 1}).withMessage('jumlah must be integer larger than 0'),
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
  queryPage,
  paramId,
  createData,
}