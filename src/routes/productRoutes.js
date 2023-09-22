const express = require ('express');
const router = express.Router();

const productController = require ('../controllers/productController.js');


router.get('/cart', productController.cart);
router.get('/create',productController.create);
router.get("/:id/", productController.detail);
router.get('/edit',productController.edit);


module.exports = router;