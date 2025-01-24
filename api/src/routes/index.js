const { Router } = require("express"); // Importamos el enrutador de express
const routerProductos = require("./routerProductos"); // Importamos el enrutador específico para productos

const mainRouter = Router(); // Creamos ua instancia del enrutador principal.

// Definimos la ruta base "/api" y asociammos el enrutador de productos.
mainRouter.use("/api", routerProductos)


// Exportamos el enrutador principal para que sea utilizado en otros arhivos.
module.exports = mainRouter;