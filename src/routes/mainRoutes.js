const express =require('express');
const router = express.Router();
const path = require("path");

const apiRouter = require('./api/index')

router.use('/api', apiRouter )

const mainController = require('../controllers/mainController.js');
const productController = require('../controllers/productController.js')

router.get('/', (req, res) => {
    res.redirect('home')
});


router.get('/home', productController.index)



module.exports  = router; 