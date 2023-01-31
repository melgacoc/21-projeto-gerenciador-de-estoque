const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const productsModels = require('../../../src/models/productsModels')
const  connection  = require('../../../src/models/connection');
const { productsList, newProduct, attProduct } = require('../mocks/products.mock');
const { expect } = chai;

describe('Teste para a camada Model de Products', function () {
  describe('Get all products', function () {
    afterEach(() => {
      sinon.restore();
    });
    it('Should return all products', async function () {
      sinon.stub(connection, 'execute').resolves([productsList]);

      const result = await productsModels.getAll();

      expect(result).to.be.deep.equal(productsList);
    });
  });

  describe('Get a product by ID', function () {
    afterEach(() => {
      sinon.restore();
    });
    it('Should return a produtc with specifc ID', async function () {
      sinon.stub(connection, 'execute').resolves([productsList[0]]);

      const result = await productsModels.getProductById(1);

      expect(result).to.be.deep.equal(productsList[0]);
    });
  });

  describe('Add a new product to DB', function () {
    afterEach(() => {
      sinon.restore();
    });
    it('Should return the new product id', async function () {

      sinon.stub(connection, 'execute').resolves([{ insertId: 4 }])

      const result = await productsModels.addNewProduct(newProduct);

      expect(result).to.be.deep.equal(4);
    });
  });

  describe('Att a product', function () {
    afterEach(() => {
      sinon.restore();
    });
    it('Should uptade a product name and id', async function () {

    })
  })
});