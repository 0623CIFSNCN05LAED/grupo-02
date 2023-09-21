const express = require ('express');
const router = express.Router();

const mainControllers = require ('../controllers/mainController.js');
const mainController = require('../controllers/mainController.js');

router.get('/', (req, res) => {
    res.redirect('home')
});

router.get('/home',mainControllers.home);


module.exports  = router; 