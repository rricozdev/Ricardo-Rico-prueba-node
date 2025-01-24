const {
  createProducto,
  getAllProductos,
} = require("../controllers/productosController");

// Post - función que solicita crear un producto
const createProductoHandler = async (req, res) => {
  const { estado, kit, barcode, nombre, presentacion, foto, peso } = req.body;

  try {
    const response = await createProducto(
      estado,
      kit,
      barcode,
      nombre,
      presentacion,
      foto,
      peso
    );
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get - función que solicita obtener un listado de productos
const getAllProductosHandler = async (req, res) => {
  try {
    const response = await getAllProductos();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createProductoHandler,
  getAllProductosHandler,
};
