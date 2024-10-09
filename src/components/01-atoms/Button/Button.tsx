// src/components/01-atoms/Button.tsx

import React from 'react';

// Definimos la interfaz de las props que aceptará el botón
interface ButtonProps {
  text: string;
  onClick?: () => void; // Función que se ejecutará cuando se haga clic en el botón
  className?: string; // Permite agregar clases adicionales de Tailwind para personalizar el estilo
}

// El componente Button acepta props según la interfaz ButtonProps
export default function Button({ text, onClick, className = '' }: ButtonProps) {
  return (
    <button
      className={`bg-slate-300 pl-5 pr-5 pt-2 pb-2 rounded-xl ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
