const { body, param, query, validationResult } = require('express-validator');

const postData = [
  body('nama').notEmpty().withMessage('nama tidak boleh kosong'),
  body('nama').matches(/^[a-zA-Z]+$/).withMessage('nama tidak valid'),
  body('nama').isLength({max: 100}).withMessage('nama maksimal 100 karakter'),
  body('nik').notEmpty().withMessage('nik tidak boleh kosong'),
  body('nik').isLength({
      min: 16,
      max: 16
    })
    .withMessage('nik harus 16 digit'),
  body('alamat').notEmpty().withMessage('alamat tidak boleh kosong'),
  body('alamat').isLength({max: 255}).withMessage('alamat maksimal 255 karakter'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    }
    next();
  }
];

const paramData = [
  param('id').notEmpty().withMessage('id tidak boleh kosong'),
  param('id').isInt().withMessage('id harus integer'),
  // param('nama').notEmpty().matches(/^[a-zA-Z]+$/).withMessage('nama tidak valid'),
  (req, res, next) => {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: errors.array()
      });
    }
    next();
  }
];

const queryData = [
  query('page').notEmpty().withMessage('page tidak boleh kosong'),
  query('page').isInt().withMessage('page harus integer'),
  query('filter').notEmpty().withMessage('filter tidak boleh kosong'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: errors.array()
      });
    }
    next();
  }
];

const filterData = [
  query('filter').notEmpty().withMessage('filter tidak boleh kosong'),
  query('filter').matches(/^((asc)|(desc))$/).withMessage('filter tidak valid'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: errors.array()
      })
    }
    next();
  }
]

const editData = [
  param('id').notEmpty().withMessage('id tidak boleh kosong'),
  param('id').isInt().withMessage('id harus integer'),
  body('nama').notEmpty().withMessage('nama tidak boleh kosong'),
  body('nama').matches(/^[a-zA-Z]+$/).withMessage('nama tidak valid'),
  body('nama').isLength({max: 100}).withMessage('nama maksimal 100 karakter'),
  body('nik').notEmpty().withMessage('nik tidak boleh kosong'),
  body('nik').isNumeric().isLength({
      min: 16,
      max: 16
    })
    .withMessage('nik harus 16 digit'),
  body('alamat').notEmpty().withMessage('alamat tidak boleh kosong'),
  body('alamat').isLength({max: 255}).withMessage('alamat maksimal 255 karakter'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    }
    next();
  }
];

const pageData = [
  query('pagination').notEmpty().withMessage('pagination tidak boleh kosong'),
  query('pagination').isInt().withMessage('pagination harus integer'),
  query('page').notEmpty().withMessage('page tidak boleh kosong'),
  query('page').isInt({min: 1}).withMessage('page harus positif integer'),
  (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        statusCode: 400
      })
    }
    next();
  }
];

module.exports = { 
  postData,
  paramData,
  queryData,
  filterData,
  editData,
  pageData
};