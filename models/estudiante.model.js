import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

// Modelo de estudiante

export const EstudianteModel = sequelize.define("Estudiante", {
  EstudianteId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  edad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  genero: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  localidad: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
});
