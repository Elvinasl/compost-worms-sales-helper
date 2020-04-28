const db = require('../models/entities');

const productRepository = {
  getAllProducts: async () => db.product.findAll(),

  createProduct: (product) => db.product.create(product),

  getProductById: (id) => db.product.findByPk(id),
};

module.exports = productRepository;
