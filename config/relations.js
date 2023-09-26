import { MateriaModel } from "../models/materia.model.js";
import { RespuestaModel } from "../models/respuesta.model.js";
import { EstudianteModel } from "../models/estudiante.model.js";
import { AñoModel } from "../models/año.model.js";

// Función para establecer relaciones
async function establecerRelaciones() {
  // Relaciones entre Materia, Estudiante y Respuesta
  MateriaModel.belongsToMany(EstudianteModel, { through: RespuestaModel });
  EstudianteModel.belongsToMany(MateriaModel, { through: RespuestaModel });

  // Relaciones entre AñoAcademico y Respuesta
  AñoModel.hasMany(RespuestaModel);
  RespuestaModel.belongsTo(AñoModel);

  // Sincronizar las relaciones con la base de datos
  try {
    await MateriaModel.sync();
    await RespuestaModel.sync();
    await EstudianteModel.sync();
    await AñoModel.sync();

    // Ejecutar las relaciones
    await MateriaModel.associate();
    await RespuestaModel.associate();
    await EstudianteModel.associate();
    await AñoModel.associate();
    console.log("Relaciones aplicadas correctamente");
  } catch (error) {
    console.log("Error in Relations.js");
  }
}

export default establecerRelaciones;
