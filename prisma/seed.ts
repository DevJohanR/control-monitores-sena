import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Limpiar todas las tablas
  await prisma.fichaResultadoAprendizaje.deleteMany();
  await prisma.horarioInstructor.deleteMany();
  await prisma.horarioFicha.deleteMany();
  await prisma.horarioAmbiente.deleteMany();
  await prisma.fichaDiaSemana.deleteMany();
  await prisma.fichaAmbiente.deleteMany();
  await prisma.instructorFicha.deleteMany();
  await prisma.ficha.deleteMany();
  await prisma.materia.deleteMany();
  await prisma.instructor.deleteMany();
  await prisma.ambiente.deleteMany();
  await prisma.resultadoAprendizaje.deleteMany();

  // Crear Materias
  const materia1 = await prisma.materia.create({ data: { nombre: 'Matemáticas Avanzadas' } });
  const materia2 = await prisma.materia.create({ data: { nombre: 'Física Cuántica' } });
  const materia3 = await prisma.materia.create({ data: { nombre: 'Programación en JavaScript' } });

  // Crear Fichas
  const ficha1 = await prisma.ficha.create({ data: { numeroFicha: '12345', idMateria: materia1.id } });
  const ficha2 = await prisma.ficha.create({ data: { numeroFicha: '67890', idMateria: materia2.id } });
  const ficha3 = await prisma.ficha.create({ data: { numeroFicha: '11223', idMateria: materia3.id } });

  // Crear Instructores
  const instructor1 = await prisma.instructor.create({ data: { nombre: 'Juan Pérez', email: 'juan.perez@example.com', password: 'instructor123' } });
  const instructor2 = await prisma.instructor.create({ data: { nombre: 'María López', email: 'maria.lopez@example.com', password: 'instructor456' } });
  const instructor3 = await prisma.instructor.create({ data: { nombre: 'Carlos García', email: 'carlos.garcia@example.com', password: 'instructor789' } });

  // Crear Ambientes
  const ambiente1 = await prisma.ambiente.create({ data: { nombre: 'Laboratorio A', bloque: 'B', sede: 'Principal' } });
  const ambiente2 = await prisma.ambiente.create({ data: { nombre: 'Laboratorio B', bloque: 'C', sede: 'Secundaria' } });
  const ambiente3 = await prisma.ambiente.create({ data: { nombre: 'Aula 101', bloque: 'A', sede: 'Principal' } });

  // Crear Resultados de Aprendizaje
  const resultado1 = await prisma.resultadoAprendizaje.create({ data: { descripcion: 'Comprender los principios básicos de la matemática avanzada' } });
  const resultado2 = await prisma.resultadoAprendizaje.create({ data: { descripcion: 'Aplicar conceptos de física cuántica' } });
  const resultado3 = await prisma.resultadoAprendizaje.create({ data: { descripcion: 'Desarrollar aplicaciones web con JavaScript' } });

  // Asociar Resultados de Aprendizaje con Fichas
  await prisma.fichaResultadoAprendizaje.createMany({
    data: [
      { idFicha: ficha1.id, idResultado: resultado1.id },
      { idFicha: ficha2.id, idResultado: resultado2.id },
      { idFicha: ficha3.id, idResultado: resultado3.id },
    ],
  });

  // Crear Horarios para los Instructores
  await prisma.horarioInstructor.createMany({
    data: [
      { jornada: 'Mañana', diaSemana: 'Lunes', horaInicio: '08:00', horaFin: '12:00', idInstructor: instructor1.id, idFicha: ficha1.id, idAmbiente: ambiente1.id },
      { jornada: 'Tarde', diaSemana: 'Martes', horaInicio: '13:00', horaFin: '17:00', idInstructor: instructor2.id, idFicha: ficha2.id, idAmbiente: ambiente2.id },
      { jornada: 'Noche', diaSemana: 'Miércoles', horaInicio: '18:00', horaFin: '21:00', idInstructor: instructor3.id, idFicha: ficha3.id, idAmbiente: ambiente3.id },
    ],
  });

  console.log('Datos iniciales creados correctamente');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
