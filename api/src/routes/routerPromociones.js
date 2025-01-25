const { Router } = require("express");
const { getPromocionesByDiaHandler } = require("../handlers/promocionesHandler");

const routerPromociones = Router();

// Get 
routerPromociones.get("/", getPromocionesByDiaHandler)

module.exports = routerPromociones;