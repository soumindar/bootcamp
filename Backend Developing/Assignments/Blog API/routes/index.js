const express = require('express');
const router = express.Router();
const authRouter = require('./auth');
const usersRouter = require('./users');
const postRouter = require('./post');
const categoryRouter = require('./category');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/', authRouter);
router.use('/users', usersRouter);
router.use('/post', postRouter);
router.use('/category', categoryRouter);

module.exports = router;
