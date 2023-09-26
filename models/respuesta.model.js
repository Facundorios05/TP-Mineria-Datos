import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
// Modelo de Respuesta
export const RespuestaModel = sequelize.define("Respuesta", {
  RespuestaId: {
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
  // Año_AcademicoId: {
  //   type: DataTypes.INTEGER,
  //   allowNull: true,
  //   references: {
  //     model: "Año_Academico",
  //     key: "Año_AcademicoId",
  //   },

  //   onDelete: "SET NULL",

  //   onUpdate: "CASCADE",
  // },
});
