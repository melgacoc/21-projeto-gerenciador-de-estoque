const productsServices = require('../services/productsServices');

const getAll = async (req, res) => {
  const products = await productsServices.getAll();
   return res.status(200).json(products);
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  const product = await productsServices.getProductById(id);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  return res.status(200).json(product);
};

const addNewProduct = async (req, res) => {
    const { name } = req.body;
    const newProduct = await productsServices.addNewProduct(name);
    return res.status(201).json(newProduct);
};

const attProduct = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const product = await productsServices.attProduct(id, name);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  return res.status(200).json(product);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  const { type, message } = await productsServices.deleteProduct(id);

  if (type) return res.status(404).json({ message });
  return res.status(204).json();
};

module.exports = {
  getAll,
  getProductById,
  addNewProduct,
  attProduct,
  deleteProduct,
};