import { DataTypes } from "sequelize";
import sequelize from "../config/db";

const MateriaModel = sequelize.define("Materia", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default MateriaModel;
