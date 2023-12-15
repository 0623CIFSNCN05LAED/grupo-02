const express = require('express');
const router = express.Router();
const productsApiController = require('../../controllers/api/productApiController');

router.get('/', productsApiController.list);
router.get('/detail/:id', productsApiController.detail)

module.exports = router;