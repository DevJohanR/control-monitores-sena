// src/components/02-molecules/Header/Header.tsx
"use client";

import React from 'react';
import Icon from "@/components/00-particles/icons/Icon";
import Button from "../../01-atoms/Button/Button";
import Logo from "../../01-atoms/Logo/Logo";
import AgregarInstructorModal from '../AgregarInstructorModal/AgregarInstructorModal';

export default function Header() {
    const fields = [
        { name: 'nombre', label: 'Nombre', type: 'text', placeholder: 'Ingrese el nombre' },
        { name: 'email', label: 'Email', type: 'email', placeholder: 'Ingrese el email' },
        { name: 'password', label: 'Contraseña', type: 'password', placeholder: 'Ingrese la contraseña' },
    ];

    return (
        <div className="fixed top-0 w-full flex justify-between items-center h-16 shadow-md bg-white px-6 z-50 text-gray-700">
            <span><Logo /></span>
            <span>
                <Button text="Agregar Instructor" />
            </span>
            <span>
                <Button text="Agregar Ficha" />
            </span>
            <span>
                <Icon name="user" size="24px" className="text-gray-950" />
            </span>
            {/* Modal de agregar instructor */}
            <AgregarInstructorModal fields={fields} />
        </div>
    );
}
