const { Pedido } = require("../db");

const seedPedidos = async () => {
  try {
    const count = await Pedido.count();
    if (count === 0) {
      await Pedido.bulkCreate([
        {
          instrucciones: "Entregar antes de las 5 PM",
          entrega_fecha: new Date(),
          valor_productos: 100.0,
          valor_envio: 10.0,
          valor_descuento: 5.0,
          valor_cupon: 2.0,
          valor_impuestos: 15.0,
          valor_final: 118.0,
          calificacion: 5,
          id_tienda: 1,
          direccion: "Calle 123",
          valor_comision: 5.0,
          id_user: 1,
          created_at: new Date(),
        },
        {
          instrucciones: "Llamar antes de entregar",
          entrega_fecha: new Date(),
          valor_productos: 200.0,
          valor_envio: 20.0,
          valor_descuento: 10.0,
          valor_cupon: 4.0,
          valor_impuestos: 30.0,
          valor_final: 236.0,
          calificacion: 4,
          id_tienda: 2,
          direccion: "Avenida 456",
          valor_comision: 10.0,
          id_user: 2,
          created_at: new Date(),
        },
        {
          instrucciones: "Entregar en la recepción",
          entrega_fecha: new Date(),
          valor_productos: 300.0,
          valor_envio: 30.0,
          valor_descuento: 15.0,
          valor_cupon: 6.0,
          valor_impuestos: 45.0,
          valor_final: 354.0,
          calificacion: 3,
          id_tienda: 3,
          direccion: "Carrera 789",
          valor_comision: 15.0,
          id_user: 3,
          created_at: new Date(),
        },
      ]);
      console.log("Pedidos created successfully");
    } else {
      console.log("Pedidos already exist in the database. Skipping seeding");
    }
  } catch (error) {
    console.error("Error seeding pedidos:", error);
  }
};

module.exports = seedPedidos;