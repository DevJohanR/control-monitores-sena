// Archivo: src/app/api/ambientes/[id]/route.ts
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    const ambiente = await prisma.ambiente.findUnique({
      where: { id: parseInt(id) },
    });

    if (!ambiente) {
      return NextResponse.json({ message: 'Ambiente no encontrado' }, { status: 404 });
    }

    return NextResponse.json(ambiente);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error al obtener el ambiente' }, { status: 500 });
  }
}