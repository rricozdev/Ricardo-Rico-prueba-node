const app = require("./src/app");
const { conn, Producto } = require("./src/db");
const productData = require("./productData");

const PORT = process.env.PORT ?? 3002;

conn.sync({ force: false }).then(() => {
  console.log("synchronized database");

  Producto.bulkCreate(productData).then(() => {
    console.log("20 products created succesfully");
    // Colocamos servidor a escuchar
    app.listen(PORT, () => {
      console.log(`server listening on http://localhost:${PORT}`);
    });
  }).catch((err) => {
    console.error("Error creating products:", err);
  });
});

// Manejo de errores
app.use((err, req, res, next) => {
  res.status(500).send("Internal server error");
});
