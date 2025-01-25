const { Producto_Stock } = require("../db");

const seedProductoStocks = async () => {
  try {
    const count = await Producto_Stock.count();
    if (count === 0) {
      await Producto_Stock.bulkCreate([
        {
          cantidad: 100.0,
          id_tienda: 1, // Corresponde a Tienda 1
          id_producto: 1, // Corresponde a Producto 1
          fecha_ingreso: new Date(),
        },
        {
          cantidad: 50.0,
          id_tienda: 2, // Corresponde a Tienda 2
          id_producto: 2, // Corresponde a Producto 2
          fecha_ingreso: new Date(),
        },
        {
          cantidad: 75.0,
          id_tienda: 3, // Corresponde a Tienda 3
          id_producto: 3, // Corresponde a Producto 3
          fecha_ingreso: new Date(),
        },
      ]);
      console.log("Producto_Stocks created successfully");
    } else {
      console.log("Producto_Stocks already exist in the database. Skipping seeding");
    }
  } catch (error) {
    console.error("Error seeding Producto_Stocks:", error);
  }
};

module.exports = seedProductoStocks;