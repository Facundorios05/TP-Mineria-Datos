import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const MateriaModel = sequelize.define("Materia", {
  MateriaId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  codigo: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
