const { Producto_Categoria } = require("../db");

const seedProductoCategoria = async () => {
  try {
    const count = await Producto_Categoria.count();
    if (count === 0) {
      await Producto_Categoria.bulkCreate([
        { id_categoria: 1, id_producto: 1 }, // Producto 1 en Categoría 1
        { id_categoria: 1, id_producto: 2 }, // Producto 2 en Categoría 1
        { id_categoria: 2, id_producto: 3 }, // Producto 3 en Categoría 2
        { id_categoria: 3, id_producto: 4 }, // Producto 4 en Categoría 3
      ]);
      console.log("Producto_Categoria created successfully");
    } else {
      console.log("Producto_Categoria already exist in the database. Skipping seeding");
    }
  } catch (error) {
    console.error("Error seeding Producto_Categoria:", error);
  }
};

module.exports = seedProductoCategoria;