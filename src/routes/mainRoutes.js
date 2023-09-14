const express = require ('express');
const router = express.Router();

const mainControllers = require ('../controllers/mainController.js')

router.get('/home',mainControllers.home);


module.exports  = router; 