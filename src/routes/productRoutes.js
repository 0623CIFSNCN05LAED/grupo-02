const express = require ('express');
const router = express.Router();
const upload = require('../middlewares/multer-product')
const authenticated = require('../middlewares/authenticated')

const multerValidation = require('../validations/multer_validation_productCreated');
const productValidation = require('../validations/validations_product');
const validateForm = require("../middlewares/validate-productsCreated");
const validateEdit = require('../middlewares/validate-editProduct')
const multerValidEdit = require('../validations/multer_valid_editProduct');


const productController = require ('../controllers/productController.js');


router.get('/cart', authenticated , productController.cart);
router.get('/destroycart', productController.destroycart)


router.get('/create', authenticated ,productController.create);
router.post("/home", upload.single("archivo"), productValidation, validateForm, multerValidation, productController.store);

router.get("/pesas/", productController.pesasView);
router.get("/otros/", productController.otrosView);
router.get("/maquinas/", productController.maquinasView);
router.get("/discos/", productController.discosView);
router.get("/barras/", productController.barrasView);

router.get("/detail/:id/", productController.detail);
router.post('/detail/:id/', authenticated , productController.cartAdd);


router.get("/edit/:id", authenticated , productController.edit);
router.put("/detail/:id", upload.single("archivo"), productValidation, validateEdit, multerValidEdit, productController.update);

router.delete("/:id", authenticated, productController.destroy);

module.exports = router;
