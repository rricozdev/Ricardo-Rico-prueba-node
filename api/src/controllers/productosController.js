const {
  Producto,
  Producto_Stock,
  Tienda,
  Pedido_Producto,
} = require("../db");

const { conn } = require("../db")

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
    // Creamos un nuevo producto en la db usando el modelo Producto.
    const nuevoProducto = await Producto.create({
      estado,
      kit,
      barcode,
      nombre,
      presentacion,
      foto,
      peso,
    });

    // Retornar el nuevo producto creado.
    return nuevoProducto;
  } catch (error) {
    // Si hay un error, lanzamos una excepción
    throw new Error(`Error al crear el producto en db: ${error.message}`);
  }
};

// Get - función que nos permite obtener el listado de productos
const getAllProductos = async () => {
  try {
    // Obtenemos todos los productos de la db, incluyendo sus stocks y tiendas asociadas.
    const dbProductos = await Producto.findAll({
      include: [
        {
          model: Producto_Stock, // Incluimos la relación con Producto_Stock
          include: [
            {
              model: Tienda, // Dentro de Producto_Stock, incluimos la relación con Tienda.
              attributes: ["id", "nombre"], // Seleccionamos sol los atributos id y nombre de Tienda.
            },
          ],
        },
      ],
    });

    // Si no hay productos registrados, manejamos el error.
    if (dbProductos.length === 0)
      throw new Error("No hay productos registrados en la db");

    // Hacemos un formateo de los productos para la respuesta que necesitamos.
    const formattedProductos = dbProductos.map((producto) => ({
      idProducto: producto.id,
      nombre: producto.nombre,
      presentacion: producto.presentacion,
      tiendas: producto.Producto_Stocks.map((stock) => ({
        idTienda: stock.Tienda.id,
        nombre: stock.Tienda.nombre,
        stock: stock.cantidad,
      })),
    }));

    // Retornamos los productos formateados.
    return formattedProductos;
    // return dbProductos;
  } catch (error) {
    throw new Error(`Error al obtener los productos ${error.message}`);
  }
};

// Get - Función para sumar las cantidadaes vendidas de cada producto
const getProductosMasVendidos = async () => {
  const productosMasVendidos = await Pedido_Producto.findAll({
    attributes: [
      "id_producto",
      [conn.fn("SUM", conn.col("cantidad")), "total_vendido"],
    ],
    group: ["id_producto", "Producto.id"],
    order: [[conn.literal("total_vendido"), "DESC"]], // Ordenamos por unidades vendidas en orden descendente.
    limit: 10,
    include: [
      {
        model: Producto,
        attributes: ["nombre", "presentacion"],
      },
    ],
  });

  console.log(
    "productosMasVendidos:",
    JSON.stringify(productosMasVendidos, null, 2) // Formatea el JSON con una sangría de 2 espacios.
  );
  

  const formattedProductos = productosMasVendidos.map((item) => ({
    idProducto: item.id_producto,
    nombre: item.Producto ? item.Producto.nombre : "nombre no disponible",
    presentacion: item.Producto ? item.Producto.presentacion : "presentacion no disponible",
    unidadesVendidas: item.dataValues.total_vendido,
  }));

  return formattedProductos;
};

module.exports = {
  createProducto,
  getAllProductos,
  getProductosMasVendidos,
};
