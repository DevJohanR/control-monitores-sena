"use client";
import Link from 'next/link';  // Importar Link correctamente
import Icon from "@/components/00-particles/icons/Icon";

export default function Footer() {
  return (
    <div className="fixed bottom-0 w-full flex justify-between items-center h-16 shadow-footer-top-shadow bg-white px-6 z-10 text-gray-700">
      <span>hola</span>
      {/* Envolver el icono con Link para redireccionar */}
      <Link href="/instructor">
        {/* Asegúrate de que sea accesible y pueda recibir clics */}
        <div className="flex items-center cursor-pointer">
          <Icon name="user" size="1.5em" className="text-gray-700" />
        </div>
      </Link>
    </div>
  );
}
