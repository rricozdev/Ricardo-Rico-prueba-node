const { Producto } = require("../db");

const seedProducts = async () => {
  try {
    const count = await Producto.count();
    if (count === 0) {
      await Producto.bulkCreate([
        { estado: 1, kit: 1, barcode: "PROD-001", nombre: "Producto 1", presentacion: "Presentación 1" },
        { estado: 1, kit: 2, barcode: "PROD-002", nombre: "Producto 2", presentacion: "Presentación 2" },
        { estado: 1, kit: 3, barcode: "PROD-003", nombre: "Producto 3", presentacion: "Presentación 3" },
        { estado: 1, kit: 4, barcode: "PROD-004", nombre: "Producto 4", presentacion: "Presentación 4" },
        { estado: 1, kit: 5, barcode: "PROD-005", nombre: "Producto 5", presentacion: "Presentación 5" },
        { estado: 1, kit: 6, barcode: "PROD-006", nombre: "Producto 6", presentacion: "Presentación 6" },
        { estado: 1, kit: 7, barcode: "PROD-007", nombre: "Producto 7", presentacion: "Presentación 7" },
        { estado: 1, kit: 8, barcode: "PROD-008", nombre: "Producto 8", presentacion: "Presentación 8" },
        { estado: 1, kit: 9, barcode: "PROD-009", nombre: "Producto 9", presentacion: "Presentación 9" },
        { estado: 1, kit: 10, barcode: "PROD-010", nombre: "Producto 10", presentacion: "Presentación 10" },
        { estado: 1, kit: 11, barcode: "PROD-011", nombre: "Producto 11", presentacion: "Presentación 11" },
        { estado: 1, kit: 12, barcode: "PROD-012", nombre: "Producto 12", presentacion: "Presentación 12" },
      ]);
      console.log("Products created successfully");
    } else {
      console.log("Products already exist in the database. Skipping seeding");
    }
  } catch (error) {
    console.error("Error seeding products:", error);
  }
};

module.exports = seedProducts;