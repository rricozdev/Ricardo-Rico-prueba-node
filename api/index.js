const app = require("./src/app");
const { conn } = require("./src/db");

const PORT = process.env.PORT ?? 3002;

conn.sync({force: false}).then(() => {
  console.log("synchronized database");
  
  // Colocamos servidor a escuchar
  app.listen(PORT, () => {
    console.log(`server listening on http://localhost:${PORT}`);
  });
});

// Manejo de errores
app.use((err, req, res, next) => {
  res.status(500).send("Internal server error");
});
