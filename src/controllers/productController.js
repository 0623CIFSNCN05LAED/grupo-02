const productController = {
    cart: function(req,res){
        res.render('product/productCart.ejs');
    },
    detail: function(req,res){
        res.render('product/productDetail.ejs');
    }
}

module.exports = productController;