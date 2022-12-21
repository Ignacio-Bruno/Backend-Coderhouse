const { Router } = require("express");
const upload = require("../../config/multer");

const products = Router();

products.post("/products", upload.array("myFiles", 4), (req, res, next) => {
  const files = req.files;
  if (!files) {
    const error = new Error("Choose your files");
    return next(error);
  }
  return res.send(files);
});

module.exports = products;




/* const { Router } = require("express");
const router = Router();
const Container = require("../container/products.js");
const productos = new Container("./container/productos.json");
const notFound = { error: "El producto no fue encontrado" };

router.get("/", async (req, res) => {
    console.log(`getAll request recibida con exito`);
    const arrayProductos = await productos.getAll();
    !arrayProductos && res.status(404).json(notFound);
    res.status(200).json(arrayProductos);
});

router.get("/:id", async (req, res) => {
    console.log(`getById request recibida con exito`);
    const id = parseInt(req.params.id);
    const producto = await productos.getById(id);
    !producto && res.status(404).json(notFound);
    res.status(200).json(producto);
});

router.post("/", async (req, res) => {
    console.log(`post request recibida con exito`);
    const data = req.body;
    console.log(data);
    const nuevoProducto = await productos.save(data);
    !data && res.status(204).json(notFound);
    res.status(201).json(data);
});

router.put("/:id", async (req, res) => {
    console.log(`put request recibida con exito`);
    const id = parseInt(req.params.id);
    const data = req.body;
    const productoEditado = await productos.modify(id, data);
    !productoEditado && res.status(404).json(notFound);
    res.status(200).json(productoEditado);
});

router.delete("/:id", async (req, res) => {
    console.log(`delete request recibida con exito`);
    const id = parseInt(req.params.id);
    const producto = await productos.getById(id);
    const eliminarProducto = await productos.deleteById(id);
    !producto && res.status(404).json(notFound);
    res.status(200).json(producto);
});

module.exports = router; */

