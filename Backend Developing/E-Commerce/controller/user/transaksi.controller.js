const { sequelize } = require('../../db');
const moment = require('moment-timezone');

// get all transaksi controller
const getAll = async (req, res) => {
  try {
    const { pagination, page, start_date, end_date, order } = req.query;

    const limit = pagination ?? 3;
    const pages = page ?? 1;
    const offset = (pages - 1) * limit;
    const startDate = start_date ?? null;
    const endDate = end_date ?? null;
    let userId = null;
    if (req.user) {
      userId = req.user.user_id;
    }
    
    let query = `SELECT * FROM transaksi
                  WHERE
                    (user_id = :userId OR :userId IS NULL)
                    AND (
                      (:startDate IS NULL AND :endDate IS NULL)
                      OR (DATE(create_at) = :startDate)
                      OR (DATE(create_at) BETWEEN :startDate AND :endDate)
                    )
                  ORDER BY create_at DESC
                  LIMIT :limit OFFSET :offset`;
    
    if (order === 'asc') {
      query = `SELECT * FROM transaksi
                  WHERE
                    (user_id = :userId OR :userId IS NULL)
                    AND (
                      (:startDate IS NULL AND :endDate IS NULL)
                      OR (DATE(create_at) = :startDate)
                      OR (DATE(create_at) BETWEEN :startDate AND :endDate)
                    )
                  ORDER BY create_at ASC
                  LIMIT :limit OFFSET :offset`;
    }

    const getTransaksi = await sequelize.query(
      query,
      {
        replacements: {
          startDate,
          endDate,
          limit,
          offset,
          userId,
        }
      }
    );

    const transaksiData = getTransaksi[0].map(x => ({...x, create_at: moment(x.create_at).tz(process.env.APP_TIMEZONE).format()}));
    
    const getDataAmount = await sequelize.query(
      `SELECT COUNT(*) as data_amount FROM transaksi
        WHERE 
          user_id = :userId
          AND (
            (:startDate IS NULL AND :endDate IS NULL)
            OR (DATE(create_at) = :startDate)
            OR (DATE(create_at) BETWEEN :startDate AND :endDate)
          )`,
      {
        replacements: {
          startDate,
          endDate,
          userId,
        }
      }
    );
    
    const dataAmount = getDataAmount[0][0].data_amount;
    const maxPage = Math.ceil(dataAmount / limit);

    return res.status(200).json({
      message: 'success',
      statusCode: 200,
      data: transaksiData,
      meta: {
        page: Number(pages),
        pagination: Number(limit),
        max_page: Number(maxPage),
        data_amount: Number(dataAmount)
      }
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      statusCode: 500
    });
  }
}

// get transaksi by id
const getById = async (req, res) => {
  try {
    const { id } = req.params;

    const getData = await sequelize.query(
      'SELECT * FROM transaksi WHERE id = :id',
      {
        replacements: {
          id
        }
      }
    );

    const transaksiData = getData[0][0];

    if (!transaksiData) {
      return res.status(404).json({
        message: 'id not found',
        statusCode: 404
      });
    }

    return res.status(200).json({
      message: 'success',
      statusCode: 200,
      data: transaksiData
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      statusCode: 500
    });
  }
}

// create transaksi data
const create = async (req, res) => {
  try {
    const user_id = req.user.user_id;
    const { barang_id, jumlah } = req.body;

    const userExist = await sequelize.query(
      'SELECT id FROM users WHERE id = :user_id',
      {
        replacements: {
          user_id
        }
      }
    );

    if (!userExist[0][0]) {
      return res.status(400).json({
        message: 'user_id is not exist',
        statusCode: 400
      });
    }

    const getBarang = await sequelize.query(
      'SELECT * FROM barang WHERE id = :barang_id',
      {
        replacements: {
          barang_id
        }
      }
    );
    const barangData = getBarang[0][0];

    if (!barangData) {
      return res.status(400).json({
        message: 'barang_id is not exist',
        statusCode: 400
      });
    }

    if (jumlah > barangData.stok) {
      return res.status(400).json({
        message: 'stok is not enough',
        statusCode: 400
      });
    }

    const current_stok = barangData.stok - jumlah;
    const total_harga = jumlah * barangData.harga;

    await sequelize.query(
      `INSERT INTO transaksi(user_id, barang_id, jumlah, total_harga)
        VALUES (:user_id, :barang_id, :jumlah, :total_harga)`,
      {
        replacements: {
          user_id,
          barang_id,
          jumlah,
          total_harga
        }
      }
    );

    await sequelize.query(
      'UPDATE barang SET stok = :current_stok WHERE id = :barang_id',
      {
        replacements: {
          current_stok,
          barang_id
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
  getAll,
  getById,
  create,
}