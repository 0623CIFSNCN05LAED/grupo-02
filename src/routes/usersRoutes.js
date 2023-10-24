const express = require ('express');
const router = express.Router();
const {urlencoded } = require("express");
const path = require("path");
const multer = require("multer");

const validations = require("../validations/validation_login");
const validateForm = require("../middlewares/validate-from");
//const userGuard = require("../middlewares/user-guard");

const storage = multer.diskStorage({
    destination: path.join(__dirname, "../../public/images/users"),
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
 
const usersController = require ('../controllers/usersController');

router.get ('/login',usersController.login);
router.post("/login",urlencoded({
    extended: false,
}),validations,validateForm,usersController.loginData)
router.get('/register',usersController.register);
router.post('/register', upload.single("archivo"), usersController.store, (req, res) => {
    res.sendStatus(200);
})


module.exports = router; 