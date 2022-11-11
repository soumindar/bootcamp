const { sequelize } = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// register controller
const register = async (req, res) => {
  try {
    const { name, username, password } = req.body;

    const usernameExist = await sequelize.query(
      'SELECT username FROM users WHERE username = :username',
      {
        replacements: {
          username
        }
      }
    );

    if (usernameExist[0][0]) {
      return res.status(409).json({
        message: 'username is already exist',
        statusCode: 409
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    await sequelize.query(
      'INSERT INTO users(name, username, password, created_at) VALUES (:name, :username, :hashedPassword, now())',
      {
        replacements: {
          name,
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

// login controller
const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const getUser = await sequelize.query(
      'SELECT id, username, password, is_deleted FROM users WHERE username = :username',
      {
        replacements: {
          username
        }
      }
    );
    
    const user = getUser[0][0];

    if (!user) {
      return res.status(404).json({
        message: 'username not found',
        statusCode: 404
      });
    }

    if (user.is_delete) {
      return res.status(404).json({
        message: 'user not exist',
        statusCode: 404
      });
    }

    const passwordMatch = await bcrypt.compareSync(password, user.password);
    if (!passwordMatch) {
      return res.status(400).json({
        message: 'wrong password',
        statusCode: 400
      });
    }

    const token = jwt.sign(
      {
        _id: user.id
      },
      process.env.SECRET,
      {
        expiresIn: "2h"
      }
    );

    await sequelize.query(
      'UPDATE users SET token = :token WHERE id = :user_id',
      {
        replacements: {
          token,
          user_id: user.id,
        }
      }
    );

    return res.status(200).json({
      message: 'login success',
      statusCode: 200,
      data: {
        user_id: user.id,
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

// logout controller
const logout = async (req, res) => {
  try {
    const id = req.user.id;

    await sequelize.query(
      'UPDATE users SET token = NULL WHERE id = :id',
      {
        replacements: {
          id
        }
      }
    );

    return res.status(200).json({
      message: 'logout success',
      statusCode: 200
    })
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      statusCode: 500
    });
  }
}

// get user data controller
const getData = async (req, res) => {
  try {
    const id = req.user.id;    
    const getUser = await sequelize.query(
      `SELECT id, name, username, created_at, updated_at
        FROM users
        WHERE id = :id AND is_deleted = false`,
      {
        replacements: {
          id
        }
      }
    );

    if (!getUser[0][0]) {
      return res.status(400).json({
        message: 'user not found',
        statusCode: 404
      });
    }
    const user = getUser[0][0];
    
    return res.status(200).json({
      message: 'success',
      statusCode: 200,
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      statusCode: 500
    });
  }
}

// update user controller
const updateUser = async (req, res) => {
  try {
    const id = req.user.id;
    const { name, username } = req.body;

    const usernameExist = await sequelize.query(
      'SELECT username FROM users WHERE username = :username AND id <> :id',
      {
        replacements: {
          username,
          id,
        }
      }
    );

    if (usernameExist[0][0]) {
      return res.status(409).json({
        message: 'username is already exist',
        statusCode: 409
      });
    }

    await sequelize.query(
      'UPDATE users SET name = :name, username = :username, updated_at = now() WHERE id = :id',
      {
        replacements: {
          name,
          username,
          id,
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

// change password controller
const changePass = async (req, res) => {
  try {
    const id = req.user.id;
    const { new_pass, confirm_pass } = req.body;

    const idExist = await sequelize.query(
      'SELECT id FROM users WHERE id = :id',
      {
        replacements: {
          id
        }
      }
    );

    if (!idExist[0][0]) {
      return res.status(404).json({
        message: 'id not exist',
        statusCode: 404
      });
    }

    if (new_pass != confirm_pass) {
      return res.status(400).json({
        message: 'confirm_pass must be same with new_pass',
        statusCode: 400
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(new_pass, salt);

    await sequelize.query(
      'UPDATE users SET password = :hashedPassword, updated_at = now(), token = NULL WHERE id = :id',
      {
        replacements: {
          hashedPassword,
          id
        }
      }
    );

    return res.status(200).json({
      message: 'change password success',
      statusCode: 200
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      statusCode: 500
    });
  }
}

// delete user controller
const deleteUser = async (req, res) => {
  try {
    const id = req.user.id;

    const idExist = await sequelize.query(
      'SELECT id FROM users WHERE id = :id',
      {
        replacements: {
          id
        }
      }
    );

    if (!idExist[0][0]) {
      return res.status(404).json({
        message: 'id not found',
        statusCode: 404
      });
    }

    await sequelize.query(
      'UPDATE users SET is_deleted = true, deleted_at = now() WHERE id = :id',
      {
        replacements: {
          id
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
  register,
  login,
  logout,
  getData,
  updateUser,
  changePass,
  deleteUser,
}