import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const RespuestaModel = sequelize.define("Respuesta", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  apreciacionPersonal: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  relevanciaContenido: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  metodologiaProfesor: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  apoyoProfesor: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
