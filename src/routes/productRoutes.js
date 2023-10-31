const express = require ('express');
const router = express.Router();
const path = require("path");
const multer = require("multer");
const authenticated = require('../middlewares/authenticated')

const storage = multer.diskStorage({
    destination: path.join(__dirname, "../../public/images/products"),
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });
  
  const upload = multer({
    storage: storage,
  });


const productController = require ('../controllers/productController.js');

router.get('/cart', authenticated , productController.cart);

router.get('/create', authenticated ,productController.create);
router.post("/home", upload.single("archivo"), productController.store);

router.get("/detail/:id/", productController.detail);


router.get("/edit/:id", authenticated , productController.edit);
router.put("/detail/:id", upload.single("archivo"), productController.update);

router.delete("/:id", authenticated, productController.destroy);

module.exports = router;