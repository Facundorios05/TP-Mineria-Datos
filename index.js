import "dotenv/config";
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import { sequelize } from "./config/db.js";
import { sync } from "./config/relations.js";

// Crea una instancia de Express
const app = express();
const port = process.env.PORT || 3000;

// Configura los middlewares
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Configura las rutas
app.get("/", (req, res) => {
  res.send("¡Hola, mundo!");
});

app.use((req, res, next) => {
  res.status(404).send("Página no encontrada");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Error interno del servidor");
});

app.listen(port, async () => {
  try {
    await sequelize.authenticate({ force: true });
    console.log("Conexión a base de datos exitosa");
    sync();
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
  }
  console.log(`Servidor en http://localhost:${port}`);
});
