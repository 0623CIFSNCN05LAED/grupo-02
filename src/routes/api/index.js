const express = require('express');
const router = express.Router();
const apiProductsRouter = require('./products')
const apiUsersRouter = require('./users')


router.use("/products", apiProductsRouter);

router.use("/users", apiUsersRouter);

module.exports = router;