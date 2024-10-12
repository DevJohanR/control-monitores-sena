import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// POST - Asignar Días de la Semana a una Ficha
export async function POST(request: Request) {
  const body = await request.json();
  const { idFicha, diaSemana } = body;

  if (!idFicha || !diaSemana) {
    return NextResponse.json(
      { message: 'Todos los campos son obligatorios' },
      { status: 400 }
    );
  }

  try {
    const nuevoDiaSemana = await prisma.fichaDiaSemana.create({
      data: {
        diaSemana,
        ficha: { connect: { id: idFicha } },
      },
    });

    return NextResponse.json(nuevoDiaSemana, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Error al asignar el día de la semana a la ficha. Inténtalo nuevamente.' },
      { status: 500 }
    );
  }
}
