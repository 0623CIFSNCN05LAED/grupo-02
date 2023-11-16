const productService = require('../services/productsServices')
const userData = require("../middlewares/user-guard")
const {Products} = require('../database/models')

const productController = {
    index: async (req,res) => {
        const products = await productService.getAllProducts();
        res.render('main/home.ejs', {products, userData: req.session.userData });
    },
    cart: function(req,res){
        res.render('product/productCart.ejs', { userData: req.session.userData });
    },
    detail: async function(req,res){
        const id = req.params.id;
    const product = await productService.getProduct(id);
        res.render('product/productDetail.ejs', {product,userData: req.session.userData });
    },
    create: (req, res) => {
        res.render('product/productCreate.ejs', { userData: req.session.userData })
    },
    store: (req, res) => {
        Products.create({
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            price: req.body.price,
            stock: req.body.stock,
            image: req.file ? req.file.filename : 'default-image.png',
        },
         res.redirect("/home"))
    },
    edit: (req, res) => {
        const id = req.params.id;
        const product = productService.getProduct(id);
        res.render('product/productUpdate.ejs', {product, userData: req.session.userData })
    },
    update: (req, res) => {
        const product = req.body;
        const id = req.params.id;
        const image = req.file
          ? req.file.filename
          : productService.getProduct(id).image;
        product.image = image;
        productService.updateProduct(id, product);
        res.redirect("/home");
      },
    destroy: (req, res) => {
        const id = req.params.id;
        productService.deleteProducts(id);
        res.redirect("/home");
      },
}

module.exports = productController;