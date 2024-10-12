// Nombre del archivo: src/app/api/materias/[id]/route.ts
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    const materia = await prisma.materia.findUnique({
      where: { id: parseInt(id) },
    });

    if (!materia) {
      return NextResponse.json({ message: 'Materia no encontrada' }, { status: 404 });
    }

    return NextResponse.json(materia);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error al obtener la materia' }, { status: 500 });
  }
}