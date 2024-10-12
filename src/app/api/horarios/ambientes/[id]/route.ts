// Archivo: src/app/api/horarios/ambientes/[id]/route.ts
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

// GET - Obtener Horario de Ambiente por ID
export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    const horario = await prisma.horarioAmbiente.findUnique({
      where: { id: parseInt(id) },
      include: {
        ambiente: true,
      },
    });

    if (!horario) {
      return NextResponse.json({ message: 'Horario no encontrado' }, { status: 404 });
    }

    return NextResponse.json(horario);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error al obtener el horario del ambiente' }, { status: 500 });
  }
}