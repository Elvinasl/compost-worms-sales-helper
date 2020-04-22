// TODO: change with DB
const products = [];

const getAll = () => {
    return products;
}

const getById = (id) => {
    // TODO: get implementation by id
    return products[0];
}

const create = (productDTO) => {
    products.push(productDTO);
    return getAll();
}

module.exports = {
    getAll: getAll,
    create: create,
    getById: getById,
};