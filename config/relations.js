import { EstudianteModel } from "../models/estudiante.model.js";
import { MateriaModel } from "../models/materia.model.js";
import { RespuestaModel } from "../models/respuesta.model.js";
import { AñoModel } from "../models/año.model.js";
import { sequelize } from "../config/db.js";

// Función para establecer relaciones
export async function establecerRelaciones() {
  // Relaciones entre Estudiante y Respuesta
  EstudianteModel.hasMany(RespuestaModel, { foreignKey: "EstudianteId" });
  RespuestaModel.belongsTo(EstudianteModel, { foreignKey: "EstudianteId" });

  // Relaciones entre Materia y Respuesta
  MateriaModel.hasMany(RespuestaModel, { foreignKey: "MateriaId" });
  RespuestaModel.belongsTo(MateriaModel, { foreignKey: "MateriaId" });

  // Relaciones entre AñoAcademico y Respuesta
  AñoModel.hasMany(RespuestaModel, { foreignKey: "Año_AcademicoId" });
  RespuestaModel.belongsTo(AñoModel, { foreignKey: "Año_AcademicoId" });
}

// Función para sincronizar todas las tablas
export async function sincronizarBaseDeDatos() {
  try {
    await sequelize.sync({ force: true, alter: true });
    console.log("Base de datos sincronizada correctamente");
  } catch (error) {
    console.error("Error al sincronizar la base de datos:", error);
  }
}

// Sincronizar las relaciones con la base de datos
export async function sync() {
  await establecerRelaciones();
  await sincronizarBaseDeDatos();
}
