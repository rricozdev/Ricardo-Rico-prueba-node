const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

// Importar modelos
const ModelCategoria = require("./models/Categoria");
const ModelProducto = require("./models/Producto");
const ModelPedido = require("./models/Pedido");
const ModelPromocion = require("./models/Promocion");
const ModelPedido_Producto = require("./models/Pedido_Producto");
const ModelProducto_Categoria = require("./models/Producto_Categoria");
const ModelProducto_Stock = require("./models/Producto_Stock");
const ModelTienda_Promocion = require("./models/Tienda_Promocion");
const ModelTienda = require("./models/Tienda");

// Crear instancia de Sequelize
const sequelize = new Sequelize(
  `postgres:${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  { logging: false, native: false }
);

// Registrar modelos
ModelCategoria(sequelize);
ModelProducto(sequelize);
ModelPedido(sequelize);
ModelPromocion(sequelize);
ModelTienda(sequelize);
ModelPedido_Producto(sequelize);
ModelProducto_Categoria(sequelize);
ModelProducto_Stock(sequelize);
ModelTienda_Promocion(sequelize);

// Obtener modelos
const {
  Categoria,
  Pedido,
  Producto,
  Tienda,
  Promocion,
  Producto_Stock,
  Producto_Categoria,
  Pedido_Producto,
  Tienda_Promocion,
} = sequelize.models;

// Definir relaciones

// Relación entre Producto y Categoría (N:M)
Producto.belongsToMany(Categoria, { through: Producto_Categoria });
Categoria.belongsToMany(Producto, { through: Producto_Categoria });

// Relación entre Producto y Producto_Stock (1:N)
Producto.hasMany(Producto_Stock, { foreignKey: "id_producto" });
Producto_Stock.belongsTo(Producto, { foreignKey: "id_producto" });

// Relación entre Pedido y Pedido_Producto (1:N)
Pedido.hasMany(Pedido_Producto, { foreignKey: "id_pedido" }); 
Pedido_Producto.belongsTo(Pedido, { foreignKey: "id_pedido" }); 

// Relación entre Producto y Pedido_Producto (1:N)
Producto.hasMany(Pedido_Producto, { foreignKey: "id_producto" });
Pedido_Producto.belongsTo(Producto, { foreignKey: "id_producto" }); 

// Relación entre Promoción y Tienda (N:M)
Promocion.belongsToMany(Tienda, { through: Tienda_Promocion });
Tienda.belongsToMany(Promocion, { through: Tienda_Promocion });

// Relación entre Producto_Stock y Tienda (N:1)
Producto_Stock.belongsTo(Tienda, { foreignKey: "id_tienda" });
Tienda.hasMany(Producto_Stock, { foreignKey: "id_tienda" });

// Exportar
module.exports = {
  conn: sequelize,
  ...sequelize.models,
};