const db = require('../models/entities');

const productRepository = {
    getAllProducts: async () => {
        return db.product.findAll()
    },

    createProduct: (product) => {
        return db.product.create(product);
    },

    getProductById: (id) => {
        return db.product.findByPk(id);
    }
}

module.exports = productRepository;