const productService = require('../services/productsServices')
const userData = require("../middlewares/user-guard")

const productController = {
    index: (req,res) => {
        const products = productService.getAllProducts();
        res.render('main/home.ejs', {products, userData: req.session.userData });
    },
    cart: function(req,res){
        res.render('product/productCart.ejs', { userData: req.session.userData });
    },
    detail: function(req,res){
        const id = req.params.id;
    const product = productService.getProduct(id);
        res.render('product/productDetail.ejs', {product,userData: req.session.userData });
    },
    create: (req, res) => {
        res.render('product/productCreate.ejs', { userData: req.session.userData })
    },
    store: (req, res) => {
        const product = {
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            price: req.body.price,
            image: req.file ? req.file.filename : 'default-image.png',
        };
        productService.createProduct(product);
        res.redirect("/home");
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