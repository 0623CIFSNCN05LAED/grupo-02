const db = require("../data/db");

const productServices = {
    getAllProducts: () => {
      return db.products.find();
    },
    getProduct: (id) => {
      const product = db.products.findById(id);
      return product;
    },
}

module.exports = productServices;