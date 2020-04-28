const productRepository = require('../repositories/productRepository');

const getAllProducts = () => {
    productRepository.getAllProducts().then(products => {
        return products;
    });
}

const getProductById = (id) => {
    return productRepository.getProductById(id).then(product => {
        return product;
    })
}

const createProduct = (productDTO) => {
    // TODO: map dto
    return productRepository.createProduct({ amount: 22, lastName: "Doe" })
        // .then(() => {
        //     return productRepository.getAllProducts();
        // });
}

module.exports = {
    getAllProducts: getAllProducts,
    createProduct: createProduct,
    getProductById: getProductById,
};