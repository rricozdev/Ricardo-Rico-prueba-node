const { conn } = require("../db"); // Importamos conn desde db.js
const { Categoria, Producto } = conn.models; // Accedemos a los modelos desde conn.models

// Función para obtener las categorías con al menos un producto
const getCategoriasConProductos = async () => {
  try {
    // Consulta para contar la cantidad de productos por categoría
    const categorias = await Categoria.findAll({
      attributes: [
          "id",
          "nombre",
          [conn.fn("COUNT", conn.col("Productos.id")), "cantProductos"], // Alias con mayúsculas
      ],
      include: [
          {
              model: Producto,
              through: { attributes: [] }, // No seleccionar atributos adicionales de la tabla intermedia
              attributes: [], // No seleccionar atributos de Producto
          },
      ],
      group: ["Categoria.id"], // Agrupar por id de categoría
      having: conn.literal("COUNT(\"Productos\".\"id\") > 0"), // Filtrar categorías con al menos un producto
      order: [[conn.literal('"cantProductos"'), "DESC"]], // Ordenar por "cantProductos" con comillas dobles
  });

    // Formatear la respuesta
    const formattedCategorias = categorias.map((categoria) => ({
      idCategoria: categoria.id,
      nombre: categoria.nombre,
      cantProductos: categoria.dataValues.cantProductos,
    }));

    return formattedCategorias;
  } catch (error) {
    throw new Error(`Error al obtener las categorías: ${error.message}`);
  }
};

module.exports = { getCategoriasConProductos };
