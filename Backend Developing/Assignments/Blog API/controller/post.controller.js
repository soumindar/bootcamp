const { sequelize } = require('../db');
const moment = require('moment-timezone');
const userTimezone = require('../config/timezone.config');

// get data controller
const getData = async (req, res) => {
  try {
    const { pagination, page, search, category, start_date, end_date, order_by, order } = req.query;

    const limit = pagination ?? 3;
    const pages = page ?? 1;
    const offset = (pages - 1) * limit;
    const searchKey = `%${search}%` ?? '%';
    const categoryKey = category ?? null;
    const startDate = start_date ?? null;
    const endDate = end_date ?? null;
    const orderBy = order_by ?? 'created_at';
    const orderKey = order ?? 'DESC';

    if (categoryKey) {
      const categoryExist = await sequelize.query(
        'SELECT category FROM category WHERE category = :categoryKey',
        {
          replacements: {
            categoryKey
          }
        }
      );
      if (!categoryExist[0][0]) {
        return res.status(404).json({
          message: 'category not found',
          statusCode: 404,
          data: []
        });
      }
    }

    const getPost = await sequelize.query(
      `SELECT
          p.id as post_id,
          p.user_id,
          u.name,
          u.username,
          p.category_id,
          c.category as category_name,
          p.title,
          p.contents,
          p.created_at,
          p.updated_at
        FROM post as p
        LEFT JOIN category as c
          ON p.category_id = c.id
        LEFT JOIN users as u
          ON p.user_id = u.id
        WHERE
          p.is_deleted = false
          AND (
            (p.title ILIKE :searchKey)
            OR (p.contents ILIKE :searchKey)
          )
          AND (
            (c.category = :categoryKey)
            OR (:categoryKey IS NULL)
          )
          AND (
            (:startDate IS NULL AND :endDate IS NULL)
            OR (DATE(p.created_at) = :startDate)
            OR (DATE(p.created_at) BETWEEN :startDate AND :endDate)
          )
        ORDER BY ${orderBy} ${orderKey}
        LIMIT :limit
        OFFSET :offset`,
      {
        replacements: {
          searchKey,
          categoryKey,
          startDate,
          endDate,
          limit,
          offset,
        }
      }
    );
    
    const postData = getPost[0].map(x => ({...x, created_at: moment(x.created_at).tz(userTimezone).format()}));
    const getDataAmount = await sequelize.query(
      `SELECT
          COUNT(p.id) as data_amount
        FROM post as p
        LEFT JOIN category as c
          ON p.category_id = c.id
        LEFT JOIN users as u
          ON p.user_id = u.id
        WHERE
          p.is_deleted = false
          AND (
            (p.title ILIKE :searchKey)
            OR (p.contents ILIKE :searchKey)
          )
          AND (
            (c.category = :categoryKey)
            OR (:categoryKey IS NULL)
          )
          AND (
            (:startDate IS NULL AND :endDate IS NULL)
            OR (DATE(p.created_at) = :startDate)
            OR (DATE(p.created_at) BETWEEN :startDate AND :endDate)
          )`,
      {
        replacements: {
          searchKey,
          categoryKey,
          startDate,
          endDate
        }
      }
    );
    const dataAmount = getDataAmount[0][0].data_amount;
    const maxPage = Math.ceil(dataAmount / limit);
    
    return res.status(200).json({
      message: 'success',
      statusCode: 200,
      data: postData,
      meta: {
        pagination: Number(limit),
        page: Number(pages),
        data_amount: Number(dataAmount),
        max_page: Number(maxPage)
      }
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      statusCode: 500
    });
  }
}

// get by id controller
const getById = async (req, res) => {
  try {
    const { id } = req.params;

    const getPost = await sequelize.query(
      `SELECT
          p.id as post_id,
          p.user_id,
          u.name,
          u.username,
          p.category_id,
          c.category as category_name,
          p.title,
          p.contents,
          p.created_at,
          p.updated_at
        FROM post as p
        LEFT JOIN category as c
          ON p.category_id = c.id
        LEFT JOIN users as u
          ON p.user_id = u.id
        WHERE p.id = :id AND p.is_deleted = false`,
      {
        replacements: {
          id,
        }
      }
    );

    if (!getPost[0][0]) {
      return res.status(404).json({
        message: 'post not found',
        statusCode: 404,
        data: {}
      });
    }

    return res.status(200).json({
      message: 'success',
      statusCode: 200,
      data: getPost[0][0]
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      statusCode: 500
    });
  }
}

// create post controller
const createPost = async (req, res) => {
  try {
    const { category_id, title, content } = req.body;
    const user_id = req.user.id;

    const categoryExist = await sequelize.query(
      'SELECT id FROM category WHERE id = :category_id',
      {
        replacements: {
          category_id
        }
      }
    );
    if (!categoryExist[0][0]) {
      return res.status(404).json({
        message: 'category_id not found',
        statusCode: 404
      });
    }
    
    await sequelize.query(
      `INSERT INTO post (user_id, category_id, title, contents, created_at)
        VALUES (:user_id, :category_id, :title, :content, now())`,
      {
        replacements: {
          user_id,
          category_id,
          title,
          content
        }
      }
    );

    return res.status(200).json({
      message: 'create success',
      statusCode: 200
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      statusCode: 500
    });
  }
}

// edit post controller
const editPost = async (req, res) => {
  try {
    const userId = req.user.id;
    const { id } = req.params;
    const postId = id;
    const { category_id, title, content } = req.body;

    const checkPost = await sequelize.query(
      'SELECT id, user_id FROM post WHERE id = :postId AND is_deleted = false',
      {
        replacements: {
          postId
        }
      }
    );
    if (!checkPost[0][0]) {
      return res.status(404).json({
        message: 'post id not found',
        statusCode: 404
      });
    }
    if (checkPost[0][0].user_id != userId) {
      return res.status(400).json({
        message: 'post not owned by this user',
        statusCode: 400
      });
    }

    const categoryExist = await sequelize.query(
      'SELECT id FROM category WHERE id = :category_id',
      {
        replacements: {
          category_id
        }
      }
    );
    if (!categoryExist[0][0]) {
      return res.status(404).json({
        message: 'category_id not found',
        statusCode: 404
      });
    }

    await sequelize.query(
      `UPDATE post
        SET
          category_id = :category_id,
          title = :title,
          contents = :content,
          updated_at = now()
        WHERE id = :postId`,
      {
        replacements: {
          category_id,
          title,
          content,
          postId
        }
      }
    );

    return res.status(200).json({
      message: 'update success',
      statusCode: 200
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      statusCode: 500
    });
  }
}

// delete post controller
const deletePost = async (req, res) => {
  try {
    const userId = req.user.id;
    const { id } = req.params;
    const postId = id;

    const checkPost = await sequelize.query(
      'SELECT id, user_id FROM post WHERE id = :postId AND is_deleted = false',
      {
        replacements: {
          postId
        }
      }
    );
    if (!checkPost[0][0]) {
      return res.status(404).json({
        message: 'post id not found',
        statusCode: 404
      });
    }
    if (checkPost[0][0].user_id != userId) {
      return res.status(400).json({
        message: 'post not owned by this user',
        statusCode: 400
      });
    }

    await sequelize.query(
      'UPDATE post SET is_deleted = true, deleted_at = now() WHERE id = :postId',
      {
        replacements: {
          postId
        }
      }
    );

    return res.status(200).json({
      message: 'delete success',
      statusCode: 200
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      statusCode: 500
    });
  }
}

module.exports = {
  createPost,
  getData,
  getById,
  editPost,
  deletePost,
}