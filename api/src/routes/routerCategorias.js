const { Router } = require("express");
const { getCategoriasConProductosHandler } = require("../handlers/categoriasHandler");

const routerCategorias = Router();

// Get 
routerCategorias.get("/", getCategoriasConProductosHandler);


module.exports = routerCategorias;