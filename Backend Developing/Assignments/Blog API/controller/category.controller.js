const { sequelize } = require('../db');

const getData = async (req, res) => {
  try {
    const { pagination, page, order_by, order } = req.query;

    const limit = pagination ?? 3;
    const pages = page ?? 1;
    const offset = (pages - 1) * limit;
    const orderBy = order_by ?? 'category';
    const orderKey = order ?? 'asc';

    const getCategory = await sequelize.query(
      `SELECT id, category
        FROM category
        ORDER BY ${orderBy} ${orderKey}
        LIMIT :limit
        OFFSET :offset`,
      {
        replacements: {
          limit,
          offset,
        }
      }
    );
    
    const categoryData = getCategory[0];
    const getDataAmount = await sequelize.query(
      'SELECT COUNT(id) as data_amount FROM category',
    );
    const dataAmount = getDataAmount[0][0].data_amount;
    const maxPage = Math.ceil(dataAmount / limit);
    
    return res.status(200).json({
      message: 'success',
      statusCode: 200,
      data: categoryData,
      meta: {
        pagination: Number(limit),
        page: Number(pages),
        data_amount: Number(dataAmount),
        max_page: Number(maxPage)
      }
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      statusCode: 500
    });
  }
}

module.exports = {
  getData,
}