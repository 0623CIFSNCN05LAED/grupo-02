const db = require("../data/db");
const {Products} = require('../database/models')
const nombreArchivo = require('../middlewares/multer')

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
          category_id: {
           id : product.category ? product.category.id : null
          },
          price: product.price,
          image: product.image,
          stock: product.stock
        }
      }
      )},
    createProduct: (body, req) => {
      return Products.create({
        name: body.name,
        description: body.description,
        category: body.category,
        price: body.price,
        stock: body.stock,
        image: req.file ? req.file.fileName : 'default-image.png',
      })},
    updateProduct: (id, product) => {
      db.products.update(id, product);
    },
    deleteProducts: (id) => {
      db.products.delete(id);
    }
}

module.exports = productServices;


