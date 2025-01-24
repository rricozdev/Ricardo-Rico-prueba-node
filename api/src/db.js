// Importamos Sequelize para la conexión a db
const { Sequelize } = require("sequelize");

// Importamos las variables de entorno para la conexión a la db.
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

// Importamos los modelos desde el archivo index de models.
const ModelCategoria = require("./models/Categoria");
const ModelProducto = require("./models/Producto");
const ModelPedido = require("./models/Pedido");
const ModelPromocion = require("./models/Promocion");
const ModelPedido_Producto = require("./models/Pedido_Producto");
const ModelProducto_Categoria = require("./models/Producto_Categoria");
const ModelProducto_Stock = require("./models/Producto_Stock");
const ModelTienda_Promocion = require("./models/Tienda_Promocion");
const ModelTienda = require("./models/Tienda");

// Creamos una instancia de Sequelize para la conexión a la db de PostgreSQL
const sequelize = new Sequelize(
  `postgres:${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  { logging: false, native: false } // Desactivamos los logs y el uso de módulos nativos.
);

// Registramos los modelos , inyectamos la conexión
ModelCategoria(sequelize);
ModelProducto(sequelize);
ModelPedido(sequelize);
ModelPromocion(sequelize);
ModelPedido_Producto(sequelize);
ModelProducto_Categoria(sequelize);
ModelProducto_Stock(sequelize);
ModelTienda_Promocion(sequelize);
ModelTienda(sequelize);


const {
    Categoria,
    Pedido_Producto,
    Pedido,
    Producto_Categoria,
    Producto_Stock,
    Producto,
    Promocion,
    Tienda_Promocion,
    Tienda,
  } = sequelize.models;

// Definimos las relaciones entre los modelos

// Relación entre producto y Categoría (N:M)
Producto.belongsToMany(Categoria, { through: Producto_Categoria });
Categoria.belongsToMany(Producto, { through: Producto_Categoria });

// Relación entere Producto y Producto_Stock(1:N)
Producto.hasMany(Producto_Stock);
Producto_Stock.belongsTo(Producto);

// Relación entre Pedido y Pedido_Producto (1:N)
Pedido.hasMany(Pedido_Producto);
Pedido_Producto.belongsTo(Pedido);

// Relación entre Producto y Pedico_Producto (1:N)
Producto.hasMany(Pedido_Producto);
Pedido_Producto.belongsTo(Producto);

// Relación entre Promoción y Tienda (N:M);
Promocion.belongsToMany(Tienda, { through: Tienda_Promocion });
Tienda.belongsToMany(Promocion, { through: Tienda_Promocion });





module.exports = {
  conn: sequelize,
  ...sequelize.models,
};
