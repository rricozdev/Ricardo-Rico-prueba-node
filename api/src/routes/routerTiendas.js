const { Router } = require("express");
const { createTiendaHandler, getAllTiendasHandler, asociarProductoATiendaHandler } = require("../handlers/tiendasHandler");
const validateTienda = require("../middlewares/validateTienda");
const routerTiendas = Router();

// Ruta para manejar POST en /api/tiendas
routerTiendas.post("/", validateTienda, createTiendaHandler);

// Ruta para manejar POST en /:idTienda/productos
routerTiendas.post("/:idTienda/producto", asociarProductoATiendaHandler);


// Get
routerTiendas.get("/", getAllTiendasHandler);

module.exports = routerTiendas;
