const { Promocion } = require("../db");

const seedPromociones = async () => {
  try {
    const count = await Promocion.count();
    if (count === 0) {
      await Promocion.bulkCreate([
        {
          estado: 1,
          nombre: "Promoción 1",
          porcentaje: 10,
          dias_semana: "Lunes,Martes",
        },
        {
          estado: 1,
          nombre: "Promoción 2",
          porcentaje: 20,
          dias_semana: "Miércoles,Jueves",
        },
        {
          estado: 1,
          nombre: "Promoción 3",
          porcentaje: 15,
          dias_semana: "Viernes,Sábado",
        },
        {
          estado: 1,
          nombre: "Promoción 4",
          porcentaje: 25,
          dias_semana: "Domingo",
        },
        {
          estado: 1,
          nombre: "Promoción 5",
          porcentaje: 30,
          dias_semana: "Lunes,Martes,Miércoles",
        },
        {
          estado: 1,
          nombre: "Promoción 6",
          porcentaje: 10,
          dias_semana: "Jueves,Viernes",
        },
        {
          estado: 1,
          nombre: "Promoción 7",
          porcentaje: 20,
          dias_semana: "Sábado,Domingo",
        },
        {
          estado: 1,
          nombre: "Promoción 8",
          porcentaje: 15,
          dias_semana: "Lunes,Martes,Miércoles,Jueves",
        },
        {
          estado: 1,
          nombre: "Promoción 9",
          porcentaje: 25,
          dias_semana: "Viernes,Sábado,Domingo",
        },
        {
          estado: 1,
          nombre: "Promoción 10",
          porcentaje: 30,
          dias_semana: "Lunes,Martes,Miércoles,Jueves,Viernes",
        },
      ]);
      console.log("Promociones created successfully");
    } else {
      console.log("Promociones already exist in the database. Skipping seeding");
    }
  } catch (error) {
    console.error("Error seeding promociones:", error);
  }
};

module.exports = seedPromociones;