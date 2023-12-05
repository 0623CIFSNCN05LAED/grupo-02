
const { body } = require("express-validator");


const validationLogin = [
  body("usuario").notEmpty().withMessage("Debe completar este campo").isEmail().withMessage('Debe colocar un email valido'),
  body("contra").notEmpty().withMessage("Debe completar este campo"),
]

module.exports = validationLogin;
