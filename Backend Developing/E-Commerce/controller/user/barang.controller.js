const { sequelize } = require('../../db');

const getAll = async (req, res) => {
  try {
    const { pagination, page, order, start_harga, end_harga } = req.query;

    const limit = pagination ?? 3;
    const pages = page ?? 1;
    const offset = (pages - 1) * limit;
    const startHarga = start_harga ?? null;
    const endHarga = end_harga ?? null;

    let query =
      `SELECT id, nama, harga, stok
        FROM barang
        WHERE
          is_deleted = false
          AND (
            (:start_harga IS NULL AND :end_harga IS NULL)
            OR (harga = :start_harga)
            OR (harga BETWEEN :start_harga AND :end_harga)
          )
        ORDER BY id ASC
        LIMIT :limit
        OFFSET :offset`;

    if (order === 'desc') {
      query =
        `SELECT id, nama, harga, stok
          FROM barang
          WHERE 
            is_deleted = false
            AND (
              (:start_harga IS NULL AND :end_harga IS NULL)
              OR (harga = :start_harga)
              OR (harga BETWEEN :start_harga AND :end_harga)
            )
          ORDER BY id DESC
          LIMIT :limit
          OFFSET :offset`;
    }
    

    const getBarang = await sequelize.query(
      query,
      {
        replacements: {
          limit,
          offset,
          start_harga: startHarga,
          end_harga: endHarga,
        }
      }
    );

    const getDataAmount = await sequelize.query(
      `SELECT COUNT(*) as data_amount
        FROM barang
        WHERE 
          is_deleted = false
          AND (
            (:start_harga IS NULL AND :end_harga IS NULL)
            OR (harga = :start_harga)
            OR (harga BETWEEN :start_harga AND :end_harga)
          )`,
      {
        replacements: {
          start_harga: startHarga,
          end_harga: endHarga,
        }
      }
    );
    
    const dataAmount = getDataAmount[0][0].data_amount;
    const maxPage = Math.ceil(dataAmount / limit);

    return res.status(200).json({
      message: 'success',
      statusCode: 200,
      data: getBarang[0],
      meta: {
        pagination: Number(limit),
        page: Number(pages),
        max_page: Number(maxPage),
        data_amount: Number(dataAmount),
      }
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

const create = async (req, res) => {
  try {
    const { nama, harga, stok } = req.body;

    await sequelize.query(
      'INSERT INTO barang(nama, harga, stok) VALUES (:nama, :harga, :stok)',
      {
        replacements: {
          nama,
          harga,
          stok,
        }
      }
    );

    return res.status(200).json({
      message: 'create success',
      statusCode: 200
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
}

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { nama, harga, stok } = req.body;

    const getBarang = await sequelize.query(
      'SELECT * FROM barang WHERE id = :id',
      {
        replacements: {
          id
        }
      }
    );

    const barang = getBarang[0][0];
    if (!barang.id) {
      return res.status(404).json({
        message: 'id not found',
        statusCode: 404
      });
    }

    if (barang.is_deleted) {
      return res.status(404).json({
        message: 'barang is not exist',
        statusCode: 404
      });
    }
    
    await sequelize.query(
      'UPDATE barang SET nama = :nama, harga = :harga, stok = :stok WHERE id = :id',
      {
        replacements: {
          id,
          nama,
          harga,
          stok,
        }
      }
    );

    return res.status(200).json({
      message: 'update success',
      statusCode: 200
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
}

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    
    const idExist = await sequelize.query(
      'SELECT * FROM barang WHERE id = :id',
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
      'UPDATE barang SET is_deleted = true, deleted_at = now() WHERE id = :id',
      {
        replacements: {
          id,
        }
      }
    );

    return res.status(200).json({
      message: 'delete success',
      statusCode: 200
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
}

module.exports = {
  getAll,
  create,
  update,
  remove,
};