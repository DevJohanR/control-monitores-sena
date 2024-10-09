// src/00-particles/icons/Icon.tsx

import React from 'react';
import { FaUser } from 'react-icons/fa';
import { IoIosArrowForward, IoMdArrowDropdownCircle } from 'react-icons/io';
import { IoHomeOutline } from 'react-icons/io5';

// Definimos el tipo para los nombres de íconos disponibles
export type IconName = 'user' | 'arrowForward' | 'arrowDropdown' | 'home';

interface IconProps {
  name: IconName;
  size?: string | number;
  className?: string;
}

// Mapeo de los íconos a sus nombres
const icons = {
  user: FaUser,
  arrowForward: IoIosArrowForward,
  arrowDropdown: IoMdArrowDropdownCircle,
  home: IoHomeOutline,
};

export default function Icon({ name, size = '1em', className = '' }: IconProps) {
  const IconComponent = icons[name];

  if (!IconComponent) {
    return null; // Si no se encuentra el ícono, retorna null o un ícono de fallback
  }

  return <IconComponent className={className} size={size} />;
}
