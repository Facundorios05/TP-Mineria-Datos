import "dotenv/config";
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import { fileDirName } from "./modules/dirname.js";
import { sequelize } from "./config/db.js";
import { establecerRelaciones } from "./config/relations.js";

// Crea una instancia de Express
const app = express();
const port = process.env.PORT || 3000;
// app.use(express.static(path.join(__dirname, "public")));

// Configura los middlewares
app.use(morgan("dev"));

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  helmet({
    contentSecurityPolicy: true,
  })
);
app.use(morgan("dev"));

// Configura las rutas
app.get("/", (req, res) => {
  res.render("index");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Error interno del servidor");
});
app.use((req, res, next) => {
  res.status(404).send("Página no encontrada");
});

app.listen(port, async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexión a base de datos exitosa");
    establecerRelaciones();
  } catch (error) {
    console.log("Error al conectar a base de datos", error);
  }
  console.log(`Servidor en ${process.env.APP_URL}:${port}`);
});
