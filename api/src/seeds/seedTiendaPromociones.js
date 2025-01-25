const { Tienda_Promocion } = require("../db");

const seedTiendaPromociones = async () => {
  try {
    const count = await Tienda_Promocion.count();
    if (count === 0) {
      await Tienda_Promocion.bulkCreate([
        {
          estado: 1,
          inicio: new Date(),
          fin: new Date(),
          id_tienda: 1, // Corresponde a Tienda 1
          id_promocion: 1, // Corresponde a Promoción 1
        },
        {
          estado: 1,
          inicio: new Date(),
          fin: new Date(),
          id_tienda: 2, // Corresponde a Tienda 2
          id_promocion: 2, // Corresponde a Promoción 2
        },
      ]);
      console.log("Tienda_Promociones created successfully");
    } else {
      console.log("Tienda_Promociones already exist in the database. Skipping seeding");
    }
  } catch (error) {
    console.error("Error seeding Tienda_Promociones:", error);
  }
};

module.exports = seedTiendaPromociones;