const { Router } = require("express");
const routerProductos = require("./routerProductos");

const mainRouter = Router();


mainRouter.use("/api", routerProductos)

module.exports = mainRouter;