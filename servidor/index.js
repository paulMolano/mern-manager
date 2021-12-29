const express = require("express");
const conectarDB = require("./config/db");

//crear el servidor
const app = express();

//conectar la base de datos
conectarDB();

// Habilitar express.json
app.use(express.json({ extended: true }));

//puerto de la app
const PORT = process.env.PORT || 4000;

//Importar RUTAS
app.use("/api/usuarios", require("./routes/usuarios"));

//arrancar la app
app.listen(PORT, () => {
  console.log(`El servidor esta funcionando en el puerto ${PORT}`);
});
