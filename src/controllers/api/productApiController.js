const productService = require('../../services/productsServices')
const {Category} = require('../../database/models')
const {Products} = require('../../database/models')


const productsApiController = {
'list': async (req, res) => {
    const products = await productService.getAllProducts();
    function category() { 
    const filterDiscos = products.filter(p => p.category_id == '1')
    const filterBarras = products.filter(p => p.category_id == '2')
    const filterPesas = products.filter(p => p.category_id == '3')
    const filterMaquinas = products.filter(p => p.category_id == '4')
    const filterOtros = products.filter(p => p.category_id == '5')

    const result = {Discos : filterDiscos.length, Barras: filterBarras.length, Pesas: filterPesas.length, Maquinas: filterMaquinas.length, Otros: filterOtros.length }
    return result
    }
    const productsWithUrls = products.map(product => {
        return {
            id: product.id,
            name: product.name,
            description: product.description,
            price: product.price,
            category: product.category_id,
            detailUrl: `${req.protocol}://${req.get('host')}/api/products/detail/${product.id}`,
        }
    })
    res.json({
        meta: {
            status: 200,
            total: products.length,
            url: req.originalUrl, 
            category: category()
        }, 
        data: productsWithUrls,
    })
  },
  'detail' : async (req, res) => {
    const id = req.params.id;
    const product = await productService.getProduct(id);
    res.json({
        meta: {
            status: 200,
            url: req.originalUrl, 
        }, 
        data: product,
        imageUrl: `${req.protocol}://${req.get('host')}/images/products/${product.image}`
    })
  },
  'categories' : async (req, res) => {
    const categories = await Category.findAll();
    const categoriesSize = categories.length;
    res.json({
        meta: {
            status: 200,
            url: req.originalUrl, 
        }, 
        data: categoriesSize,
    })
  },
  'lastProduct' : async (req, res) => {
    const products = await Products.findAll()
    const lastProduct = products[products.length - 1]
    res.json({
        meta: {
          status: 200,
          url: req.originalUrl,
        },
        data: lastProduct,
      });
  },
  'apiCategories' : async (req, res) => {
    const products = await productService.getAllProducts();
    function category() { 
    const filterDiscos = products.filter(p => p.category_id == '1')
    const filterBarras = products.filter(p => p.category_id == '2')
    const filterPesas = products.filter(p => p.category_id == '3')
    const filterMaquinas = products.filter(p => p.category_id == '4')
    const filterOtros = products.filter(p => p.category_id == '5')
    const result = [{ name: 'Discos', total: filterDiscos.length},{ name: 'Barras', total: filterBarras.length}, { name: 'Pesas', total: filterPesas.length}, {name: 'Maquinas', total: filterMaquinas.length},{name: 'Otros', total: filterOtros.length}]

    return result
}
    res.json({
    meta: {
      status: 200,
      url: req.originalUrl,
    },
    data: category(),
  });
},
    
}
module.exports = productsApiController