const { Router } = require("express");

const routerProductos = Router();

// CRUD

// Get  - 
routerProductos.get("/productos" , (req, res) => {
    console.log("creando rutas");
    res.status(200).send("creando rutas...")
    
} )

module.exports = routerProductos;