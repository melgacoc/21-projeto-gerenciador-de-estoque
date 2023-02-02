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
};

const deleteProduct = async (id) => {
  const product = await productsModel.getProductById(id);
  if (!product) return { type: 404, message: 'Product not found' };

  const delProduct = await productsModel.deleteProduct(id);
  return delProduct;
};

module.exports = {
  getAll,
  getProductById,
  addNewProduct,
  attProduct,
  deleteProduct,
};