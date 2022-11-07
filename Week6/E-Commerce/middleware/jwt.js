const jwt = require('jsonwebtoken');
const { sequelize } = require('../db');

const jwtVerify = async (req, res, next) => {
  try {
    const getToken = req.headers['authorization'];

    if (!getToken) {
      return res.status(401).json({
        message: 'no token',
        statusCode: 401
      });
    }

    const token = getToken.replace('Bearer ', '');

    const getUser = await sequelize.query(
      'SELECT id, tokens, is_delete FROM users WHERE tokens = :token',
      {
        replacements: {
          token,
        }
      }
    );

    const tokenUser = getUser[0][0].tokens;

    if (!tokenUser) {
      return res.status(401).json({
        message: 'token not found',
        statusCode: 401
      });
    }

    if (getUser[0][0].is_delete) {
      return res.status(404).json({
        message: 'user not exist',
        statusCode: 404
      });
    }

    jwt.verify(token, process.env.SECRET);

    req['user'] = {
      user_id: getUser[0][0].id,
    }

    req['token'] = token;

    return next();
  } catch (error) {
    return res.status(401).json({
      message: error.message,
      statusCode: 401
    });
  }
}

module.exports = jwtVerify;