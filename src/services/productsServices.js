const productsModel = require('../models/productsModels');

const getAll = async () => {
  const products = await productsModel.getAll();
  return products;
};

const getProductById = async (id) => {
  const product = await productsModel.getProductById(id);
  return product;
};

const addNewProduct = async (name) => {
  const id = await productsModel.addNewProduct(name);
  return { id, name };
};

const attProduct = async (id, name) => {

  await productsModel.attProduct(id, name);
  const product = await productsModel.getProductById(id);
  return product;
}

module.exports = {
  getAll,
  getProductById,
  addNewProduct,
  attProduct,
};