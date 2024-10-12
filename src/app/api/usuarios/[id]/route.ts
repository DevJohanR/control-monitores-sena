  // Archivo: src/app/api/usuarios/[id]/route.ts
  import { PrismaClient } from '@prisma/client';
  import { NextResponse } from 'next/server';
  
  const prisma = new PrismaClient();
  
  // GET - Obtener Usuario por ID
  export async function GET(request: Request, { params }: { params: { id: string } }) {
    const { id } = params;
  
    try {
      const usuario = await prisma.usuario.findUnique({
        where: { id: parseInt(id) },
      });
  
      if (!usuario) {
        return NextResponse.json({ message: 'Usuario no encontrado' }, { status: 404 });
      }
  
      return NextResponse.json(usuario);
    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: 'Error al obtener el usuario' }, { status: 500 });
    }
  }