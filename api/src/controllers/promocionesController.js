const { Promocion, Tienda, Tienda_Promocion } = require("../db");

const diasMap = {
  Lunes: 0,
  Martes: 1,
  Miércoles: 2,
  Jueves: 3,
  Viernes: 4,
  Sábado: 5,
  Domingo: 6,
};

const getNameDay = (dia) => {
  const nombresDias = Object.keys(diasMap);
  return nombresDias[dia];
};

const getPromocionesByDia = async (dia) => {
  if (dia < 0 || dia > 6) {
    throw new Error("Día no válido");
  }

  const nombreDia = getNameDay(dia);

  const promociones = await Promocion.findAll();
  console.log("promociones", promociones);

  const promocionesFiltradas = promociones.filter((promocion) => {
    const diasSemana = promocion.dias_semana.split(",");

    return diasSemana.some((diaNombre) => diaNombre.trim() === nombreDia);
  });
  console.log("promociones filtradas:", promocionesFiltradas);

  if (promocionesFiltradas.length === 0) {
    return [];
  }

  const promocionesConTiendas = await Promise.all(
    promocionesFiltradas.map(async (promocion) => {
      const tiendasPromocion = await Tienda_Promocion.findAll({
        where: {
          id_promocion: promocion.id,
          // Elimina las condiciones de fecha
        },
        include: [Tienda],
      });

      console.log(
        `Tiendas para promoción ${promocion.id}:`,
        tiendasPromocion.map((tp) => tp.Tienda?.nombre)
      );

      const tiendas = tiendasPromocion
        .map((tp) => tp.Tienda?.nombre)
        .filter(Boolean);

      return {
        idPromocion: promocion.id,
        nombre: promocion.nombre,
        tiendas: tiendas,
      };
    })
  );
  return promocionesConTiendas;
};

module.exports = {
  getPromocionesByDia,
};
