// Archivo: src/app/api/fichas/[id]/route.ts

import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    const ficha = await prisma.ficha.findUnique({
      where: { id: parseInt(id) },
      include: {
        materia: true,
        horariosInstructor: true,
      },
    });

    if (!ficha) {
      return NextResponse.json({ message: 'Ficha no encontrada' }, { status: 404 });
    }

    return NextResponse.json(ficha);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error al obtener la ficha' }, { status: 500 });
  }
}