const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
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
} = require("./models/index");

const sequelize = new Sequelize(
  `postgres:${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  { logging: false, native: false }
);

module.exports = {
  sequelize,
};
