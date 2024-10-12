import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET - Listar todas las Fichas
export async function GET() {
  try {
    const fichas = await prisma.ficha.findMany({
      include: {
        materia: true,
        horariosInstructor: true,
      },
    });
    return NextResponse.json(fichas, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Error al obtener las fichas.' },
      { status: 500 }
    );
  }
}

// POST - Crear una nueva Ficha
export async function POST(request: Request) {
  const body = await request.json();
  const { numeroFicha, idMateria } = body;

  if (!numeroFicha || !idMateria) {
    return NextResponse.json(
      { message: 'Todos los campos son obligatorios' },
      { status: 400 }
    );
  }

  try {
    const nuevaFicha = await prisma.ficha.create({
      data: {
        numeroFicha,
        materia: { connect: { id: idMateria } },
      },
    });

    return NextResponse.json(nuevaFicha, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Error al crear la ficha. Inténtalo nuevamente.' },
      { status: 500 }
    );
  }
}
