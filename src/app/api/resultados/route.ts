import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET - Listar todos los Resultados de Aprendizaje
export async function GET() {
  try {
    const resultados = await prisma.resultadoAprendizaje.findMany();
    return NextResponse.json(resultados, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Error al obtener los resultados de aprendizaje.' },
      { status: 500 }
    );
  }
}

// POST - Crear un nuevo Resultado de Aprendizaje
export async function POST(request: Request) {
  const body = await request.json();
  const { descripcion } = body;

  if (!descripcion) {
    return NextResponse.json(
      { message: 'La descripción del resultado de aprendizaje es obligatoria.' },
      { status: 400 }
    );
  }

  try {
    const nuevoResultado = await prisma.resultadoAprendizaje.create({
      data: {
        descripcion,
      },
    });

    return NextResponse.json(nuevoResultado, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Error al crear el resultado de aprendizaje. Inténtalo nuevamente.' },
      { status: 500 }
    );
  }
}
