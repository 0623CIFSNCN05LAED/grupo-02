const productService = require('../services/productsServices')
const userData = require("../middlewares/user-guard")
const {Products} = require('../database/models')
const {Category} = require('../database/models')


const productController = {
    index: async (req,res) => {
        console.log(req.session.userData)
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
    // search: async (req, res) => {
    //     const query = req.query.q;
    
    //     if (!query) {
    //         return res.status(400).json({ error: 'La consulta de búsqueda está vacía.' });
    //     }
    
    //     try {
    //         const connection = await mysql.createConnection(dbConfig);
    //         const [resultados] = await connection.execute('SELECT * FROM products WHERE nombre LIKE ?', [`%${query}%`]);
    //         connection.end();
    //         res.json(resultados);
    //     } catch (error) {
    //         console.error('Error al realizar la búsqueda en la base de datos:', error);
    //         res.status(500).json({ error: 'Error interno del servidor' });
    //     }
    // }
     
}

module.exports = productController;