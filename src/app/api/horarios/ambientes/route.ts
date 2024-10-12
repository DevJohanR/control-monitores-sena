import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET - Listar Horarios de Ambientes
export async function GET() {
  try {
    const horarios = await prisma.horarioAmbiente.findMany({
      include: {
        ambiente: true,
      },
    });
    return NextResponse.json(horarios, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Error al obtener los horarios de los ambientes.' },
      { status: 500 }
    );
  }
}

// POST - Crear un nuevo Horario de Ambiente
export async function POST(request: Request) {
  const body = await request.json();
  const { jornada, diaSemana, horaInicio, horaFin, idAmbiente } = body;

  if (!jornada || !diaSemana || !horaInicio || !horaFin || !idAmbiente) {
    return NextResponse.json(
      { message: 'Todos los campos son obligatorios' },
      { status: 400 }
    );
  }

  try {
    const nuevoHorario = await prisma.horarioAmbiente.create({
      data: {
        jornada,
        diaSemana,
        horaInicio,
        horaFin,
        ambiente: { connect: { id: idAmbiente } },
      },
    });

    return NextResponse.json(nuevoHorario, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Error al crear el horario del ambiente. Inténtalo nuevamente.' },
      { status: 500 }
    );
  }
}
