const express = require ('express');
const router = express.Router();
const {urlencoded } = require("express");
const path = require("path");
const multer = require("multer");

const validationLogin = require("../validations/validation_login");
const validateForm = require("../middlewares/validate-form");
const validateUser = require("../validations/validation_users");
const validateRegister = require("../validations/validation_register");
const validRegi = require("../validations/valid_register");

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

router.get ('/login', usersController.login);
router.post("/login",urlencoded({
    extended: false,
}), validationLogin,validateUser, validateForm, usersController.loginData);
router.get('/logout', usersController.logout)

router.get('/register',usersController.register);
router.post('/register', urlencoded({
  extended: false,
}), validateRegister, validRegi, upload.single("archivo"), usersController.store)


module.exports = router; 