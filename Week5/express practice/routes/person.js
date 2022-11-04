const express = require('express');
const router = express.Router();
const { sequalize } = require('../db');
const personController = require('../controller/personController');
const personValidation = require('../middleware/validation/person.validation');

// router.get('/', personValidation.queryData, (req, res) => {
//   // const { filter, page } = req.query;

//   return res.status(200).json({
//     message: 'Hello',
//     filter,
//     page
//   });
// });

// router.get('/:id/:nama', personValidation.paramData, (req, res) => {
//   const { id, nama } = req.params;
//   return res.status(200).json({
//     message: 'ini parameter',
//     parameter: {
//       id,
//       nama
//     }
//   });
// });

// router.post('/', personValidation.postData, personController.getBody);

router.get('/getall', personController.getAll);

router.get('/getfilter', personValidation.filterData, personController.getFilter);

router.get('/page', personValidation.pageData, personController.getByPage);

router.get('/:id', personValidation.paramData, personController.getId);

router.post('/', personValidation.postData, personController.create);

router.delete('/:id', personValidation.paramData, personController.remove);

router.put('/:id', personValidation.editData, personController.update);

module.exports = router;