const express = require ('express');
const router = express.Router();
const upload = require('../middlewares/multer-product')
const authenticated = require('../middlewares/authenticated')




const productController = require ('../controllers/productController.js');

router.get('/cart', authenticated , productController.cart);

router.get('/create', authenticated ,productController.create);
router.post("/home", upload.single("archivo"), productController.store);

router.get("/detail/:id/", productController.detail);


router.get("/edit/:id", authenticated , productController.edit);
router.put("/detail/:id", upload.single("archivo"), productController.update);

router.delete("/:id", authenticated, productController.destroy);

module.exports = router;
