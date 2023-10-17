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
        res.render('product/productUpdate.ejs', {product})
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