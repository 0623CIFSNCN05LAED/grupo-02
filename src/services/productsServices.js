const db = require("../data/db");

const productServices = {
    getAllProducts: () => {
      return db.products.findAll();
    },
    getProduct: (id) => {
      const product = db.products.findById(id);
      return product;
    },
    createProduct: (product) => {
      db.products.create(product);
    },
    updateProduct: (id, product) => {
      db.products.update(id, product);
    },
    deleteProducts: (id) => {
      db.products.delete(id);
    }
}

module.exports = productServices;