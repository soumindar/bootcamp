const express = require('express');
const router = express.Router();
const authRoute = require('./auth');
const usersRoute = require('./users');
const transaksiRouter = require('./transaksi');
const barangRouter = require('./barang');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/auth', authRoute);
router.use('/users', usersRoute);
router.use('/transaksi', transaksiRouter);
router.use('/barang', barangRouter);

module.exports = router;
