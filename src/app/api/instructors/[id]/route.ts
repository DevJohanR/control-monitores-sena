// Archivo: src/app/api/instructors/[id]/route.ts

import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  // Validar que el ID sea un número válido
  if (isNaN(Number(id))) {
    return NextResponse.json({ message: 'El ID proporcionado no es válido' }, { status: 400 });
  }

  try {
    const instructor = await prisma.instructor.findUnique({
      where: { id: parseInt(id) },
    });

    if (!instructor) {
      return NextResponse.json({ message: 'Instructor no encontrado' }, { status: 404 });
    }

    return NextResponse.json(instructor);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error al obtener el instructor' }, { status: 500 });
  }
}
