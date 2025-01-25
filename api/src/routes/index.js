const { Router } = require("express"); // Importamos el enrutador de express
// Importamos el enrutador específico para productos
const routerProductos = require("./routerProductos"); 

// Importamos el enrutador específico para tiendas
const routerTiendas = require("./routerTiendas");
const routerCategorias = require("./routerCategorias");
const routerPromociones = require("./routerPromociones");

const mainRouter = Router(); // Creamos ua instancia del enrutador principal.

// Definimos la ruta base "/api" y asociammos el enrutador de productos.
mainRouter.use("/api/productos", routerProductos);

// ruta tiendas
mainRouter.use("/api/tiendas", routerTiendas);

// ruta categorias
mainRouter.use("/api/categorias", routerCategorias);

// ruta promociones
mainRouter.use("/api/promociones", routerPromociones);


// Exportamos el enrutador principal para que sea utilizado en otros arhivos.
module.exports = mainRouter;