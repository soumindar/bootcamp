const jwt = require('jsonwebtoken');
const { sequelize } = require('../db');

const jwtVerify = async (req, res, next) => {
  try {
    const getToken = req.headers['authorization'];
    const getAdminToken = req.headers['admin_token'];

    if (getAdminToken) {
      const token = getAdminToken.replace('Bearer ', '');
      const getAdmin = await sequelize.query(
        'SELECT id, tokens, is_deleted FROM admins WHERE tokens = :token',
        {
          replacements: {
            token,
          }
        }
      );
  
      if (!getAdmin[0][0]) {
        return res.status(401).json({
          message: 'admin_token invalid',
          statusCode: 401
        });
      }
  
      if (getAdmin[0][0].is_deleted) {
        return res.status(404).json({
          message: 'admin not exist',
          statusCode: 404
        });
      }
  
      jwt.verify(token, process.env.SECRET);
      req['admin'] = { admin_id: getAdmin[0][0].id };
      req['token'] = token;
  
      return next();  
    }
    
    if (getToken) {
      const token = getToken.replace('Bearer ', '');
      const getUser = await sequelize.query(
        'SELECT id, tokens, is_delete FROM users WHERE tokens = :token',
        {
          replacements: {
            token,
          }
        }
      );

      if (!getUser[0][0]) {
        return res.status(401).json({
          message: 'token invalid',
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
      req['user'] = { user_id: getUser[0][0].id };
      req['token'] = token;

      return next();
    }

    return res.status(401).json({
        message: 'no token',
        statusCode: 401
      });
  } catch (error) {
    return res.status(401).json({
      message: error.message,
      statusCode: 401
    });
  }
}

module.exports = jwtVerify;