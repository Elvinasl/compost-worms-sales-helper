const productRepository = require('../repositories/productRepository');

const getAllProducts = () => {
  // TODO: map dto
  return productRepository.getAllProducts().then((products) => products)
};

const getProductById = (id) => {
  // TODO: map dto
  return productRepository.getProductById(id).then((product) => product);
};

const createProduct = (productDTO) => {
// TODO: map dto
  return productRepository.createProduct({
    amount: 22,
    phone: 'Doe',
  })
    .then(() => productRepository.getAllProducts());
};


module.exports = {
  getAllProducts,
  createProduct,
  getProductById,
};
