const express = require('express');
const router = express.Router();
const productsApiController = require('../../controllers/api/productApiController');

router.get('/', productsApiController.list);
router.get('/detail/:id', productsApiController.detail)
router.get('/categories', productsApiController.categories)
router.get('/lastproduct', productsApiController.lastProduct)
router.get('/apicategories' , productsApiController.apiCategories)

module.exports = router;