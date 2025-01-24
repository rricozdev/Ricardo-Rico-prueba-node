const { Router } = require("express");

const mainRouter = Router();


mainRouter.use("/", (req, res) => {
    console.log("creando rutas");
    res.status(200).send("creando rutas")
    
})

module.exports = mainRouter;