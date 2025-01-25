const { Tienda } = require("../db");

const seedTiendas = async () => {
  try {
    const count = await Tienda.count();
    if (count === 0) {
      await Tienda.bulkCreate([
        {
          estado: 1,
          nombre: "Tienda 1",
          direccion: "Calle 123",
          valor_comision: 5.0,
          id_user: 1,
        },
        {
          estado: 1,
          nombre: "Tienda 2",
          direccion: "Avenida 456",
          valor_comision: 10.0,
          id_user: 2,
        },
        {
          estado: 1,
          nombre: "Tienda 3",
          direccion: "Carrera 789",
          valor_comision: 7.5,
          id_user: 3,
        },
      ]);
      console.log("Tiendas created successfully");
    } else {
      console.log("Tiendas already exist in the database. Skipping seeding");
    }
  } catch (error) {
    console.error("Error seeding tiendas:", error);
  }
};

module.exports = seedTiendas;