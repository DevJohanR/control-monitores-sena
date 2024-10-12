// Archivo: src/app/api/horarios/fichas/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET - Listar Horarios de Fichas
export async function GET() {
  try {
    const horarios = await prisma.horarioFicha.findMany({
      include: {
        ficha: true,
        materia: true,
      },
    });
    return NextResponse.json(horarios, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Error al obtener los horarios de las fichas.' },
      { status: 500 }
    );
  }
}

// POST - Agregar un nuevo Horario de Ficha
export async function POST(request: Request) {
  const body = await request.json();
  const { jornada, diaSemana, horaInicio, horaFin, idFicha, idMateria } = body;

  if (!jornada || !diaSemana || !horaInicio || !horaFin || !idFicha || !idMateria) {
    return NextResponse.json(
      { message: 'Todos los campos son obligatorios' },
      { status: 400 }
    );
  }

  try {
    // Verificar si la ficha y la materia existen antes de intentar crear el horario
    const fichaExists = await prisma.ficha.findUnique({
      where: { id: idFicha },
    });

    const materiaExists = await prisma.materia.findUnique({
      where: { id: idMateria },
    });

    if (!fichaExists) {
      return NextResponse.json(
        { message: 'La ficha proporcionada no existe.' },
        { status: 404 }
      );
    }

    if (!materiaExists) {
      return NextResponse.json(
        { message: 'La materia proporcionada no existe.' },
        { status: 404 }
      );
    }

    const nuevoHorario = await prisma.horarioFicha.create({
      data: {
        jornada,
        diaSemana,
        horaInicio,
        horaFin,
        ficha: { connect: { id: idFicha } },
        materia: { connect: { id: idMateria } },
      },
    });

    return NextResponse.json(nuevoHorario, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Error al crear el horario de la ficha. Inténtalo nuevamente.' },
      { status: 500 }
    );
  }
}