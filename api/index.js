const app = require("./src/app");
const { conn } = require("./src/db");
const seedTiendas = require("./src/seeds/seedTiendas");
const seedCategories = require("./src/seeds/seedCategories");
const seedProducts = require("./src/seeds/seedProducts");
const seedProductoCategoria = require("./src/seeds/seedProductoCategoria");
const seedPedidos = require("./src/seeds/seedPedidos");
const seedPedidoProductos = require("./src/seeds/seedPedidoProductos");
const seedProductoStocks = require("./src/seeds/seedProductoStocks");
const seedPromociones = require("./src/seeds/seedPromociones");
const seedTiendaPromociones =require("./src/seeds/seedTiendaPromociones");

const PORT = process.env.PORT ?? 3002;

conn.sync({force: false}).then(async () => {
  console.log("Synchronized database");

  await seedTiendas();
  await seedCategories();
  await seedProducts();
  await seedProductoCategoria();
  await seedPedidos();
  await seedPedidoProductos();
  await seedProductoStocks();
  await seedPromociones();
  await seedTiendaPromociones();

  app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);    
  });  
}).catch((err) => {
  console.error("Error syncing database:", err);
});


app.use((err, req, res, next) => {

  res.status(500).send("Internal server error.");
});