const { sequelize } = require('../../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const getAdmin = await sequelize.query(
      'SELECT * FROM admins WHERE username = :username',
      {
        replacements: {
          username
        }
      }
    );

    const admin = getAdmin[0][0];
    if (!admin) {
      return res.status(404).json({
        message: 'username admin not found',
        statusCode: 404
      });
    }

    if (admin.is_deleted) {
      return res.status(404).json({
        message: 'admin not exist',
        statusCode: 404
      });
    }
    
    const passwordMatch = await bcrypt.compareSync(password, admin.password);
    if (!passwordMatch) {
      return res.status(400).json({
        message: 'wrong password',
        statusCode: 400
      });
    }

    const token = jwt.sign(
      {
        _id: admin.id
      },
      process.env.SECRET,
      {
        expiresIn: "2h"
      }
    );

    await sequelize.query(
      'UPDATE admins SET tokens = :token WHERE id = :id',
      {
        replacements: {
          id: admin.id,
          token
        }
      }
    );

    return res.status(200).json({
      message: 'login success',
      statusCode: 200,
      data: {
        admin_id: admin.id,
        token
      }
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      statusCode: 500
    });
  }
}

const register = async (req, res) => {
  try {
    const { username, password } = req.body;

    const adminExist = await sequelize.query(
      'SELECT * FROM admins WHERE username = :username',
      {
        replacements: {
          username
        }
      }
    );

    if (adminExist[0][0]) {
      return res.status(409).json({
        message: 'username admin is already exist',
        statusCode: 409
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    await sequelize.query(
      'INSERT INTO admins (username, password) VALUES (:username, :hashedPassword)',
      {
        replacements: {
          username,
          hashedPassword
        }
      }
    );

    return res.status(200).json({
      message: 'register success',
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
  login,
  register,
}