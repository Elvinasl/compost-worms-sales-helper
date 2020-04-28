const productRepository = require('../repositories/productRepository');

const getAllProducts = () => productRepository.getAllProducts().then((products) => products);

const getProductById = (id) => productRepository.getProductById(id).then((product) => product);

const createProduct = (productDTO) =>
// TODO: map dto
  productRepository.createProduct({ amount: 22, lastName: 'Doe' })
    .then(() => productRepository.getAllProducts()).catch((err) => {
      console.log(err);
      throw err;
    });


module.exports = {
  getAllProducts,
  createProduct,
  getProductById,
};
