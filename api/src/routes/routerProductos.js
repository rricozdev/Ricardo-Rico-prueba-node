const { Router } = require("express"); // Impportamos el enrutador de express
const { createProductoHandler, getAllProductosHandler, getProductosMasVendidosHandler } = require("../handlers/productosHandler");
const validateProducto = require("../middlewares/validateProducto");

const routerProductos = Router(); // Creamos una instancia del enrutador para productos

// CRUD

// Post - Ruta para crear productos.
routerProductos.post("/",validateProducto, createProductoHandler);

// Get  - Ruta para obtener productos.
routerProductos.get("/" , getAllProductosHandler);

// Get - Ruta para obtener los más vendidos
routerProductos.get("/mas-vendidos", getProductosMasVendidosHandler);


// Exportamos el enrutador para usarlo en el enrutador principal o en otros módulos.
module.exports = routerProductos;