
const { body } = require("express-validator");


const validationLogin = [
  body("usuario").notEmpty().withMessage("Debe completar este campo"),
  body("contra").notEmpty().withMessage("Debe completar este campo"),
]

module.exports = validationLogin;
