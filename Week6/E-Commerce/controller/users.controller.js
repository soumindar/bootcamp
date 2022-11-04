const { sequelize } = require('../db');
const bcrypt = require('bcrypt');


const register = async (req, res) => {
  const { nama, username, password } = req.body;

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
  const salt2 = await bcrypt.genSalt(27);
  console.log(salt, salt2);

  const hashedPassword = await bcrypt.hash(password, salt);
  
  await sequelize.query(
    'INSERT INTO users(nama, username, password) VALUES (:nama, :username, :password)',
    {
      replacements: {
        nama,
        username,
        password: hashedPassword
      }
    }
  );

  return res.status(200).json({
    message: 'register success',
    statusCode: 200
  })
}

const login = async (req, res) => {
  const { username, password } = req.body;

  const getUser = await sequelize.query(
    'SELECT id, username, password FROM users WHERE username = :username',
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

  const passwordMatch = await bcrypt.compareSync(password, user.password);

  if (!passwordMatch) {
    return res.status(400).json({
      message: 'wrong password',
      statusCode: 400
    });
  }

  return res.status(200).json({
    message: 'login success',
    statusCode: 200,
    data: {
      user_id: user.id
    }
  });
}

// const updatePut = async (req, res) => {
//   const { nama, username, password } = req.body;

//   const getUser = await sequelize.query(
//     'SELECT username, password FROM users WHERE username = :username',
//     {
//       replacements: {
//         username
//       }
//     }
//   );
  
//   const user = getUser[0][0];
//   if (!user) {
//     return res.status(404).json({
//       message: 'user not found',
//       statusCode: 404
//     });
//   }
  
//   await sequelize.query(
//     'UPDATE '
//   )
// }

const getAll = async (req, res) => {
  const { pagination, page } = req.query;

  const limit = pagination ?? 3;
  const pages = page ?? 1;
  const offset = (pages - 1) * limit;
  let query = 'SELECT id, nama, username FROM users LIMIT :limit OFFSET :offset';
  const getUsers = await sequelize.query(
    query,
    {
      replacements: {
        limit,
        offset
      }
    }
  );

  const users = getUsers[0];
  
  const getDataAmount = await sequelize.query(
    'SELECT COUNT(*) AS amount FROM users'
  );

  const dataAmount = getDataAmount[0][0].amount;
  const maxPage = Math.ceil(dataAmount / limit);

  return res.status(200).json({
    message: 'success',
    statusCode: 200,
    data: users,
    meta: {
      page: Number(pages),
      pagination: Number(limit),
      max_page: Number(maxPage),
      data_amount: Number(dataAmount),
    }
  });
}

const getUserById = async (req, res) => {
  const { id } = req.params;

  const getUser = await sequelize.query(
    'SELECT id, nama, username FROM users WHERE id = :id',
    {
      replacements: {
        id
      }
    }
  );

  const user = getUser[0][0];

  if (!user) {
    return res.status(404).json({
      message: 'user not found',
      statusCode: 404,
      data: {}
    });
  }

  return res.status(200).json({
    message: 'success',
    statusCode: 200,
    data: user
  });
}

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { nama, username } = req.body;

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
      'UPDATE users SET nama = :nama, username = :username WHERE id = :id',
      {
        replacements: {
          nama,
          username,
          id,
        }
      }
    );

    return res.status(200).json({
      message: 'success',
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
  getAll,
  getUserById,
  updateUser,
}