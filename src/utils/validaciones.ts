// src/utils/validaciones.ts

/*
Esta función se encargará de recibir un nuevo horario y validarlo contra los horarios existentes en el frontend para asegurar que no haya solapamientos.
*/

export interface Horario {
    jornada: string;
    diaSemana: string;
    horaInicio: string;
    horaFin: string;
    idAmbiente: string;
  }
  
  export function validarSolapamiento(nuevoHorario: Horario, horariosExistentes: Horario[]) {
    const { jornada, diaSemana, horaInicio, horaFin, idAmbiente } = nuevoHorario;
  
    for (const horario of horariosExistentes) {
      if (
        horario.jornada === jornada &&
        horario.diaSemana === diaSemana &&
        horario.idAmbiente === idAmbiente
      ) {
        // Verificar si hay solapamiento en horas
        const inicioNuevo = new Date(`1970-01-01T${horaInicio}:00`);
        const finNuevo = new Date(`1970-01-01T${horaFin}:00`);
        const inicioExistente = new Date(`1970-01-01T${horario.horaInicio}:00`);
        const finExistente = new Date(`1970-01-01T${horario.horaFin}:00`);
  
        if (
          (inicioNuevo < finExistente && finNuevo > inicioExistente) || // Solapamiento total o parcial
          (inicioNuevo >= inicioExistente && inicioNuevo < finExistente) || // Nuevo horario dentro de uno existente
          (finNuevo > inicioExistente && finNuevo <= finExistente) // Nuevo fin dentro de uno existente
        ) {
          return {
            valido: false,
            mensaje: `Conflicto con el horario existente: ${horario.horaInicio} - ${horario.horaFin} en ${horario.idAmbiente}`,
          };
        }
      }
    }
  
    return { valido: true };
  }
  