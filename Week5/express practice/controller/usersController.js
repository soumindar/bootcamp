const { sequelize } = require('../db');

const login = async (req, res) => {
  const { username, password } = req.body;

  const getPassword = await sequelize.query(
    'SELECT password FROM users WHERE :password = password',
    {
      replacements: {
        password
      }
    }
  );

  if (!getPassword[0][0]) {
    return res.status(200).json({
      message: 'wrong password',
      statusCode: 200
    });
  }

  return res.status(200).json({
    message: 'success',
    statusCode: 200
  });
}

module.exports = {
  login
}