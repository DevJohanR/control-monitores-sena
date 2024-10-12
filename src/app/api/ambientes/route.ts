import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET - Listar todos los Ambientes
export async function GET() {
  try {
    const ambientes = await prisma.ambiente.findMany({
      include: {
        horariosInstructor: true,
        horarios: true,
      },
    });
    return NextResponse.json(ambientes, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Error al obtener los ambientes.' },
      { status: 500 }
    );
  }
}

// POST - Crear un nuevo Ambiente
export async function POST(request: Request) {
  const body = await request.json();
  const { nombre, bloque, sede } = body;

  if (!nombre || !bloque || !sede) {
    return NextResponse.json(
      { message: 'Todos los campos son obligatorios' },
      { status: 400 }
    );
  }

  try {
    const nuevoAmbiente = await prisma.ambiente.create({
      data: {
        nombre,
        bloque,
        sede,
      },
    });

    return NextResponse.json(nuevoAmbiente, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Error al crear el ambiente. Inténtalo nuevamente.' },
      { status: 500 }
    );
  }
}
