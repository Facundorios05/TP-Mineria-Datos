import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

// Modelo de Año Académico

export const AñoModel = sequelize.define("Año_Academico", {
  Año_AcaemicoId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  año: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

