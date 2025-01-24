const { createTienda, getAllTiendas, asociarProductoATienda } = require("../controllers/tiendasController");

// Post
const createTiendaHandler = async (req, res) => {
  try {
    const { estado, nombre } = req.body;
    const response = await createTienda(estado, nombre);
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Post
const asociarProductoATiendaHandler = async (req, res) =>{
    const { idTienda: id_tienda } = req.params;
    const { cantidad, idProducto } = req.body;

    console.log("idTienda:", id_tienda);
    

    try {
        const response = await asociarProductoATienda(cantidad, id_tienda, idProducto);
        res.status(201).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message });
    };
};

// Get
const getAllTiendasHandler = async (req, res) => {
    try {
        const response = await getAllTiendas();
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({ error: error.message });
    };
};


module.exports = {
  createTiendaHandler,
  asociarProductoATiendaHandler,
  getAllTiendasHandler
};
