import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const body = await request.json();
  const { jornada, diaSemana, horaInicio, horaFin, idInstructor, idFicha, idAmbiente, idMateria } = body;

  // Verificar que todos los campos necesarios sean proporcionados
  if (!jornada || !diaSemana || !horaInicio || !horaFin || !idInstructor || !idFicha || !idAmbiente || !idMateria) {
    return NextResponse.json(
      { message: 'Todos los campos son obligatorios' },
      { status: 400 }
    );
  }

  try {
    // Validar que no haya solapamientos para el horario del instructor
    const horariosConflictos = await prisma.horarioInstructor.findMany({
      where: {
        diaSemana,
        jornada,
        idAmbiente,
        OR: [
          {
            horaInicio: {
              lt: horaFin,
            },
            horaFin: {
              gt: horaInicio,
            },
          },
        ],
      },
    });

    if (horariosConflictos.length > 0) {
      return NextResponse.json(
        { message: 'Conflicto de horarios detectado. Por favor, seleccione un horario diferente.' },
        { status: 400 }
      );
    }

    // Si no hay conflictos, proceder a crear el horario del instructor
    const nuevoHorarioInstructor = await prisma.horarioInstructor.create({
      data: {
        jornada,
        diaSemana,
        horaInicio,
        horaFin,
        ficha: { connect: { id: idFicha } },
        instructor: { connect: { id: idInstructor } },
        ambiente: { connect: { id: idAmbiente } },
      },
    });

    // Crear automáticamente el horario para la ficha
    const nuevoHorarioFicha = await prisma.horarioFicha.create({
      data: {
        jornada,
        diaSemana,
        horaInicio,
        horaFin,
        materia: { connect: { id: idMateria } },
        ficha: { connect: { id: idFicha } },
        instructor: idInstructor ? { connect: { id: idInstructor } } : undefined,
        ambiente: idAmbiente ? { connect: { id: idAmbiente } } : undefined,
      },
    });

    // Crear automáticamente el horario para el ambiente
    const nuevoHorarioAmbiente = await prisma.horarioAmbiente.create({
      data: {
        jornada,
        diaSemana,
        horaInicio,
        horaFin,
        ambiente: { connect: { id: idAmbiente } },
      },
    });

    // Devolver el resultado de los horarios creados
    return NextResponse.json(
      { nuevoHorarioInstructor, nuevoHorarioFicha, nuevoHorarioAmbiente },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { message: 'Error al agregar los horarios. Inténtalo nuevamente.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const horarios = await prisma.horarioInstructor.findMany();

    if (!horarios || horarios.length === 0) {
      return NextResponse.json({ message: 'No se encontraron horarios' }, { status: 404 });
    }

    return NextResponse.json(horarios);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error al obtener los horarios' }, { status: 500 });
  }
}
