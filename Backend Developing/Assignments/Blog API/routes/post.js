const express = require('express');
const router = express.Router();
const jwtVerify = require('../middleware/jwt');
const postValidator = require('../middleware/validator/post.validator');
const postController = require('../controller/post.controller');

// use jwt verification
router.use(jwtVerify);

// get data
router.get('/', postValidator.queryData, postController.getData);

// get by id
router.get('/:id', postValidator.paramId, postController.getById);

// create post
router.post('/create', postValidator.createData, postController.createPost);

// update post
router.patch('/edit/:id', postValidator.paramId, postController.editPost);

// delete post
router.delete('/delete/:id', postValidator.paramId, postController.deletePost);

module.exports = router;