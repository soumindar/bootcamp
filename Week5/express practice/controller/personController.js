const { sequelize } = require('../db');

const getBody = async (req, res) => {
  const { nama, nik, alamat } = req.body;

  return res.status(200).json({
    message: 'success',
    body: {
      nama,
      nik,
      alamat
    }
  })
}

const getAll = async (req, res) => {
  try {
    const data = await sequelize.query('SELECT * FROM penduduk');

    return res.status(200).json({
      message: 'success',
      data: data[0]
    })
  } catch (err) {
    return res.status(500).json({
      message: error.message,
      statusCode: 500
    })
  }
}

const getFilter = async (req, res) => {
  try {
    const { filter } = req.query;
    let query = '';
    if (filter === 'asc') {
      query = 'SELECT * FROM penduduk ORDER BY nik ASC';
    } else {
      query = 'SELECT * FROM penduduk ORDER BY nik DESC';
    }
    
    const data = await sequelize.query(query);

    return res.status(200).json({
      message: 'success',
      data: data[0]
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      statusCode: 500
    })
  }
}

const getId = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await sequelize.query(
      'SELECT * FROM penduduk WHERE id = :id',
      {
        replacements: {
          id
        }
      }
    );

    return res.status(200).json({
      message: 'success',
      data: data[0][0]
    })
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      statusCode: 500
    })
  }
  
}

const create = async (req, res) => {
  try {
    const { nik, nama, alamat } = req.body;
    const cekNik = await sequelize.query(
      'select * from penduduk where nik = :nik',
      {
        replacements: {
          nik
        }
      }
    );

    if (cekNik[0][0]) {
      return res.status(401).json({
        message: 'nik sudah terdaftar',
        statusCode: 401
      });
    }

    await sequelize.query(
      `INSERT INTO penduduk(nik, nama, alamat)
      values(:nik, :nama, :alamat)`,
      {
        replacements: {
          nik,
          nama,
          alamat
        }
      }
    );

    return res.status(201).json({
      message: 'success',
      statusCode: 201
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      statusCode: 500
    });
  }  
}

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const cekId = await sequelize.query(
      'select * from penduduk where id = :id',
      {
        replacements: {
          id
        }
      }      
    )
    
    if (!cekId[0][0]) {
      return res.status(404).json({
        message: 'id tidak ada',
        statusCode: 404
      });
    }

    await sequelize.query(
      'delete from penduduk where id = :id',
      {
        replacements: {
          id
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

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { nik, nama, alamat } = req.body;

    const cekId = await sequelize.query(
      'SELECT * FROM penduduk WHERE id = :id',
      {
        replacements: {
          id
        }
      }      
    );

    if (!cekId[0][0]) {
      return res.status(404).json({
        message: 'id tidak ada',
        statusCode: 404
      });
    }

    await sequelize.query(
      `UPDATE penduduk
      SET nik = :nik, nama = :nama, alamat = :alamat
      WHERE id = :id`,
      {
        replacements: {
          nik,
          nama,
          alamat,
          id
        }
      }
    );

    return res.status(200).json({
      message: 'success',
      statusCode: 200
    })

  } catch (error) {
    return res.status(500).json({
      message: error.message,
      statusCode: 500
    });
  }
}

const getByPage = async (req, res) => {
  const { pagination, page } = req.query;
  const countData = await sequelize.query('SELECT COUNT(*) AS jml FROM penduduk');
  const dataAmount = countData[0][0].jml;

  const maxPage = Math.ceil(dataAmount/pagination);
  const offset = (page - 1) * pagination;
  
  const data = await sequelize.query(
    'SELECT * FROM penduduk LIMIT :limit OFFSET :offset',
    {
      replacements: {
        limit: pagination,
        offset
      }
    }
  );

  return res.status(200).json({
    message: 'success',
    data: data[0],
    meta: {
      pagination,
      maxPage,
      amount: dataAmount
    }
  });
}

module.exports = {
  getBody,
  getAll,
  getFilter,
  getId,
  create,
  remove,
  update,
  getByPage
};