const productService = require('../services/productsServices')
const userData = require("../middlewares/user-guard")
const {Products} = require('../database/models')
const {Category} = require('../database/models')
const Sequelize = require('sequelize');
const { Op } = Sequelize;


const productController = {
    index: async (req,res) => {
        const products = await productService.getAllProducts();
        res.render('main/home.ejs', {products, userData: req.session.userData });
    },
    pesasView: async (req,res)=> {
        const productsAll = await productService.getAllProducts();
        const products = productsAll.filter((p) => '3' == p.category_id);
        res.render('product/productPesas.ejs', {products, userData: req.session.userData });
    },
    otrosView: async (req,res)=> {
        const productsAll = await productService.getAllProducts();
        const products = productsAll.filter((p) => '5' == p.category_id);
        res.render('product/productOtros.ejs', {products, userData: req.session.userData });
    },
    maquinasView : async (req,res)=> {
        const productsAll = await productService.getAllProducts();
        const products = productsAll.filter((p) => '4' == p.category_id);
        res.render('product/productMaquinas.ejs', {products, userData: req.session.userData });
    },
    discosView : async (req,res)=> {
        const productsAll = await productService.getAllProducts();
        const products = productsAll.filter((p) => '1' == p.category_id);
        res.render('product/productDiscos.ejs', {products, userData: req.session.userData });
    },
    barrasView : async (req,res)=> {
        const productsAll = await productService.getAllProducts();
        const products = productsAll.filter((p) => '2' == p.category_id);
        res.render('product/productBarras.ejs', {products, userData: req.session.userData });
    },
    cart: function(req,res){
        res.render('product/productCart.ejs', {userData: req.session.userData , product : req.session.cart});
    },
    cartAdd : async function (req, res){
        const id = req.params.id
        console.log(id);
        const product = await Products.findByPk(id);
        if (product){
            if (!req.session.cart){
                req.session.cart = [];
            }
            req.session.cart.push(product);
        }
        console.log(req.session.cart);
        res.redirect('/product/cart');
    },
    detail: async function(req,res){
        const id = req.params.id;
    const product = await productService.getProduct(id);
    console.log(req.session.userData)
        res.render('product/productDetail.ejs', {product,userData: req.session.userData });
    },
    create: async (req, res) => {
        const categories = await Category.findAll();
        res.render('product/productCreate.ejs', { categories, userData: req.session.userData , multerProductCreated: req.session.multerProductCreated, errors : req.session.errorsProduct })
    },
    store: (req, res) => {
        console.log(req.body);
        Products.create({
            name: req.body.name,
            description: req.body.description,
            category_id: req.body.category,
            price: req.body.price,
            stock: req.body.stock,
            image: req.file ? req.file.filename : 'default-image.png',
        })
         res.redirect("/home")
    },
    edit: async (req, res) => {
        const categories = await Category.findAll();
        const id = req.params.id;
        const product = await productService.getProduct(id);
        res.render('product/productUpdate.ejs', {categories, product, userData: req.session.userData , errors : req.session.errorsProduct, multerProductEdit: req.session.multerProductEdit })
    },
    update: (req, res) => {
        const productId = req.params.id;
        Products.update({
            name: req.body.name,
            description: req.body.description,
            category_id: req.body.category,
            price: req.body.price,
            stock: req.body.stock,
            image: req.file ? req.file.filename : 'default-image.png'
        },
        {
            where: {id : productId}
        })
        .then(()=> {
            return res.redirect("/home");
        })
      },
    destroy: function (req, res) {
        const id = req.params.id;
        Products.destroy({where: {id : id}, force: true})
        .then(()=> {
            res.redirect("/home")})
            .catch(error => res.send(error))
      },
    destroycart: function(req, res){
        delete req.session.cart

        res.redirect('/');
       
    },
    search: async (req, res) => {
        const searchTerm = req.query.searchTerm;
        console.log(searchTerm)
        const products = await Products.findAll({
             where: {
              name: {
                [Op.like]: `%${searchTerm}%`,
               },
             },
           });
           console.log(products)
           res.render('product/productResults', {products, userData: req.session.userData})
           
     }
   
     
}

module.exports = productController;