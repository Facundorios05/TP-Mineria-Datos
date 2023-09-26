import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";



export const AñoModel = sequelize.define("AñoAcademico", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  año: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

