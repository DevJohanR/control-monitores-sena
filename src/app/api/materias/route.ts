// Archivo: src/app/api/materias/route.ts
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombre } = body;

    if (!nombre) {
      return NextResponse.json({ message: 'El campo nombre es obligatorio' }, { status: 400 });
    }

    const nuevaMateria = await prisma.materia.create({
      data: {
        nombre,
      },
    });

    return NextResponse.json(nuevaMateria, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error al crear la materia' }, { status: 500 });
  }
}

export async function GET() {
    try {
      const materias = await prisma.materia.findMany();
  
      if (!materias || materias.length === 0) {
        return NextResponse.json({ message: 'No se encontraron materias' }, { status: 404 });
      }
  
      return NextResponse.json(materias);
    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: 'Error al obtener las materias' }, { status: 500 });
    }
  }

  