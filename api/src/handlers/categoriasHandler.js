const { getCategoriasConProductos } = require("../controllers/categoriasController");

const getCategoriasConProductosHandler = async (req, res) => {
    try {
        const categorias = await getCategoriasConProductos();
        res.status(200).json({
            message: "Consultado correctamente",
            data: categorias,
        })
    } catch (error) {
        res.status(400).json({ error: error.message });
    };
};



module.exports = {
    getCategoriasConProductosHandler,
}