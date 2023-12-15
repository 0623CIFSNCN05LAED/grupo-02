const db = require("../data/db");
const {Products} = require('../database/models')
const nombreArchivo = require('../middlewares/multer-product')

const productServices = {
    getAllProducts: () => {
      return Products.findAll();
    },
    getProduct: (id) => {
      return Products.findByPk(id, {
        include: ['category']
      })
      .then((product) => {
        return {
          id: product.id,
          name: product.name,
          description: product.description,
          category_id: product.category_id,
          price: product.price,
          image: product.image,
          stock: product.stock
        }
      }
      )}
}

module.exports = productServices;


