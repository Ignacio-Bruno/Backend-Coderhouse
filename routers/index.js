const Router = require("express").Router;
const productos = require("./products");

const router = Router();

router.use("/products", productos);

module.exports = router;