const productService = require('../../services/productsServices')


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
  }
};

module.exports = productsApiController