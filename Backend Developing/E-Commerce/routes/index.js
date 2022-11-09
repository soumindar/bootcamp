const express = require('express');
const router = express.Router();
const authRouter = require('./user/auth');
const usersRouter = require('./user/users');
const transaksiRouter = require('./user/transaksi');
const barangRouter = require('./user/barang');
const adminLoginRouter = require('./admin/login.admin');
const adminRegisterRouter = require('./admin/register.admin');
const barangAdminRouter = require('./admin/barang.admin');
const transaksiAdminRouter = require('./admin/transaksi.admin');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/user', authRouter);
router.use('/users', usersRouter);
router.use('/barang', barangRouter);
router.use('/transaksi', transaksiRouter);
router.use('/admin/login', adminLoginRouter);
router.use('/admin/register', adminRegisterRouter);
router.use('/admin/barang', barangAdminRouter);
router.use('/admin/transaksi', transaksiAdminRouter);

module.exports = router;
