import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const body = await request.json();
  const { jornada, diaSemana, horaInicio, horaFin, idInstructor, idFicha, idAmbiente } = body;

  if (!jornada || !diaSemana || !horaInicio || !horaFin || !idInstructor || !idFicha || !idAmbiente) {
    return NextResponse.json(
      { message: 'Todos los campos son obligatorios' },
      { status: 400 }
    );
  }

  try {
    // Validar que no haya solapamientos
    const horariosConflictos = await prisma.horarioInstructor.findMany({
      where: {
        diaSemana: diaSemana,
        jornada: jornada,
        idAmbiente: idAmbiente,
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

    // Si no hay conflictos, proceder a crear el horario
    const nuevoHorario = await prisma.horarioInstructor.create({
      data: {
        jornada,
        diaSemana,
        horaInicio,
        horaFin,
        ficha: { connect: { id: idFicha } },
        instructor: { connect: { id: idInstructor } },
        ambiente: { connect: { id: idAmbiente } }
      },
    });

    return NextResponse.json(nuevoHorario, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Error al agregar el horario. Inténtalo nuevamente.' },
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