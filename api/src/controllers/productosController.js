const { Producto } = require("../db");

// Post - función que nos permite crear un producto
const createProducto = async (
  estado,
  kit,
  barcode,
  nombre,
  presentacion,
  foto,
  peso
) => {
  try {
    const nuevoProducto = await Producto.create({
      estado,
      kit,
      barcode,
      nombre,
      presentacion,
      foto,
      peso,
    });

    return nuevoProducto;
  } catch (error) {
    throw new Error(`Error al crear el producto en db: ${error.message}`);
  }
};

// Get - función que nos permite obtener el listado de productos
const getAllProductos = async () => {
  try {
    const dbProductos = await Producto.findAll();

    if (dbProductos.length === 0)
      throw new Error("No hay productos registrados en la db");

    return dbProductos;
  } catch (error) {
    throw new Error(`Error al obtener los productos ${error.message}`);
  }
};

module.exports = {
  createProducto,
  getAllProductos,
};
