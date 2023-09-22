const productService = require('../services/productsServices')


const productController = {
    index: (req,res) => {
        const products = productService.getAllProducts();
        res.render('main/home.ejs', {products});
    },
    cart: function(req,res){
        res.render('product/productCart.ejs');
    },
    detail: function(req,res){
        const id = req.params.id;
    const product = productService.getProduct(id);
        res.render('product/productDetail.ejs', {product});
    },
    create: (req, res) => {
        res.render('product/productCreate.ejs')
    },
    edit: (req, res) => {
        res.render('product/productUpdate.ejs')
    },
}

module.exports = productController;