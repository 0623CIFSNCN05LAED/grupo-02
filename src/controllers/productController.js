const productController = {
    cart: function(req,res){
        res.render('product/productCart.ejs');
    },
    detail: function(req,res){
        res.render('product/productDetail.ejs');
    },
    create: (req, res) => {
        res.render('product/productCreate.ejs')
    },
    edit: (req, res) => {
        res.render('product/productUpdate.ejs')
    },
   
}

module.exports = productController;