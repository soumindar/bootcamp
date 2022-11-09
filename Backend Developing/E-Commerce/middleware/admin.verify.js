const { sequelize } = require('../db');

const adminVerify = async (req, res, next) => {
  const getAdminToken = req.headers['admin_token'];

  if (!getAdminToken) {
    return res.status(401).json({
      message: 'access unauthorized',
      statusCode: 401
    });
  }

  const token = getAdminToken.replace('Bearer ', '');
  const getAdmin = await sequelize.query(
    'SELECT id, tokens, is_deleted FROM admins WHERE tokens = :token',
    {
      replacements: {
        token,
      }
    }
  );

  if (getAdmin[0][0].is_deleted) {
    return res.status(401).json({
      message: 'access unauthorized',
      statusCode: 401
    });
  }

  return next();
};

module.exports = adminVerify;