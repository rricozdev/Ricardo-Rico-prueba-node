const { Pedido_Producto } = require("../db");

const seedPedidoProductos = async () => {
  try {
    const count = await Pedido_Producto.count();
    if (count === 0) {
      await Pedido_Producto.bulkCreate([
        // Producto 1 vendido en varios pedidos
        { cantidad: 5, valor_unitario: 50.0, total_teorico: 250.0, total_final: 250.0, id_promocion: 1, id_producto: 1, id_pedido: 1 },
        { cantidad: 3, valor_unitario: 50.0, total_teorico: 150.0, total_final: 150.0, id_promocion: 1, id_producto: 1, id_pedido: 2 },
        { cantidad: 2, valor_unitario: 50.0, total_teorico: 100.0, total_final: 100.0, id_promocion: 1, id_producto: 1, id_pedido: 3 },

        // Producto 2 vendido en varios pedidos
        { cantidad: 4, valor_unitario: 100.0, total_teorico: 400.0, total_final: 400.0, id_promocion: 2, id_producto: 2, id_pedido: 1 },
        { cantidad: 1, valor_unitario: 100.0, total_teorico: 100.0, total_final: 100.0, id_promocion: 2, id_producto: 2, id_pedido: 2 },

        // Producto 3 vendido en varios pedidos
        { cantidad: 6, valor_unitario: 30.0, total_teorico: 180.0, total_final: 180.0, id_promocion: 3, id_producto: 3, id_pedido: 1 },
        { cantidad: 2, valor_unitario: 30.0, total_teorico: 60.0, total_final: 60.0, id_promocion: 3, id_producto: 3, id_pedido: 2 },

        // Producto 4 vendido en varios pedidos
        { cantidad: 7, valor_unitario: 25.0, total_teorico: 175.0, total_final: 175.0, id_promocion: 4, id_producto: 4, id_pedido: 1 },
        { cantidad: 3, valor_unitario: 25.0, total_teorico: 75.0, total_final: 75.0, id_promocion: 4, id_producto: 4, id_pedido: 2 },

        // Producto 5 vendido en varios pedidos
        { cantidad: 8, valor_unitario: 40.0, total_teorico: 320.0, total_final: 320.0, id_promocion: 5, id_producto: 5, id_pedido: 1 },
        { cantidad: 4, valor_unitario: 40.0, total_teorico: 160.0, total_final: 160.0, id_promocion: 5, id_producto: 5, id_pedido: 2 },

        // Producto 6 vendido en varios pedidos
        { cantidad: 9, valor_unitario: 60.0, total_teorico: 540.0, total_final: 540.0, id_promocion: 6, id_producto: 6, id_pedido: 1 },
        { cantidad: 5, valor_unitario: 60.0, total_teorico: 300.0, total_final: 300.0, id_promocion: 6, id_producto: 6, id_pedido: 2 },

        // Producto 7 vendido en varios pedidos
        { cantidad: 10, valor_unitario: 70.0, total_teorico: 700.0, total_final: 700.0, id_promocion: 7, id_producto: 7, id_pedido: 1 },
        { cantidad: 6, valor_unitario: 70.0, total_teorico: 420.0, total_final: 420.0, id_promocion: 7, id_producto: 7, id_pedido: 2 },

        // Producto 8 vendido en varios pedidos
        { cantidad: 11, valor_unitario: 80.0, total_teorico: 880.0, total_final: 880.0, id_promocion: 8, id_producto: 8, id_pedido: 1 },
        { cantidad: 7, valor_unitario: 80.0, total_teorico: 560.0, total_final: 560.0, id_promocion: 8, id_producto: 8, id_pedido: 2 },

        // Producto 9 vendido en varios pedidos
        { cantidad: 12, valor_unitario: 90.0, total_teorico: 1080.0, total_final: 1080.0, id_promocion: 9, id_producto: 9, id_pedido: 1 },
        { cantidad: 8, valor_unitario: 90.0, total_teorico: 720.0, total_final: 720.0, id_promocion: 9, id_producto: 9, id_pedido: 2 },

        // Producto 10 vendido en varios pedidos
        { cantidad: 13, valor_unitario: 100.0, total_teorico: 1300.0, total_final: 1300.0, id_promocion: 10, id_producto: 10, id_pedido: 1 },
        { cantidad: 9, valor_unitario: 100.0, total_teorico: 900.0, total_final: 900.0, id_promocion: 10, id_producto: 10, id_pedido: 2 },
      ]);
      console.log("Pedido_Productos created successfully");
    } else {
      console.log("Pedido_Productos already exist in the database. Skipping seeding");
    }
  } catch (error) {
    console.error("Error seeding Pedido_Productos:", error);
  }
};

module.exports = seedPedidoProductos;