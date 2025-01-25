const { Categoria } = require("../db");

const seedCategories = async () => {
  try {
    const count = await Categoria.count();
    if (count === 0) {
      await Categoria.bulkCreate([
        { nombre: "Electrónica", estado: 1 },
        { nombre: "Ropa", estado: 1 },
        { nombre: "Hogar", estado: 1 },
        { nombre: "Deportes", estado: 1 },
        { nombre: "Juguetes", estado: 1 },
      ]);
      console.log("Categories created successfully");
    } else {
      console.log("Categories already exist in the database. Skipping seeding");
    }
  } catch (error) {
    console.error("Error seeding categories:", error);
  }
};

module.exports = seedCategories;