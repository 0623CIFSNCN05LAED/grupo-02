
const { body } = require("express-validator");

module.exports = [
  body("usuario").notEmpty().withMessage("Debe completar este campo"),
  body("password").notEmpty().withMessage("Debe completar este campo")
]