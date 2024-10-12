// src/app/api/instructors/route.ts

import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const instructores = await prisma.instructor.findMany();
    return NextResponse.json(instructores, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Error al obtener los instructores.' },
      { status: 500 }
    );
  }
}


export async function POST(request: Request) {
  const body = await request.json();
  const { nombre, email, password } = body;

  if (!nombre || !email || !password) {
    return NextResponse.json(
      { message: 'Todos los campos son obligatorios' },
      { status: 400 }
    );
  }

  try {
    const newInstructor = await prisma.instructor.create({
      data: { nombre, email, password },
    });

    return NextResponse.json(newInstructor, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Error al agregar el instructor.' },
      { status: 500 }
    );
  }
}
