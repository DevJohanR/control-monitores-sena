import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET - Listar Usuarios
export async function GET() {
  try {
    const usuarios = await prisma.usuario.findMany();
    return NextResponse.json(usuarios, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Error al obtener los usuarios.' },
      { status: 500 }
    );
  }
}

// POST - Crear un nuevo Usuario
export async function POST(request: Request) {
  const body = await request.json();
  const { email, password, rol } = body;

  if (!email || !password || !rol) {
    return NextResponse.json(
      { message: 'Todos los campos son obligatorios' },
      { status: 400 }
    );
  }

  try {
    const nuevoUsuario = await prisma.usuario.create({
      data: {
        email,
        password,
        rol,
      },
    });

    return NextResponse.json(nuevoUsuario, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Error al crear el usuario. Inténtalo nuevamente.' },
      { status: 500 }
    );
  }
}
