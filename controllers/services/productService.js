// TODO: change with DB
const products = [];

const getAllProducts = () => {
    return products;
}

const getProductById = (id) => {
    // TODO: get implementation by id
    return products[0];
}

const createProduct = (productDTO) => {
    products.push(productDTO);
    return getAllProducts();
}

module.exports = {
    getAllProducts: getAllProducts,
    createProduct: createProduct,
    getProductById: getProductById,
};