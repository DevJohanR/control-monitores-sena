// src/components/02-molecules/Header/Header.tsx
"use client";

import React from 'react';

import Logo from "../../01-atoms/Logo/Logo";
import AgregarInstructorModal from '../AgregarInstructorModal/AgregarInstructorModal';
import AgregarAmbienteModal from '../AgregarAmbienteModal/AgregarAmbienteModal';
import AgregarFichaModal from '../AgregarFichaModal/AgregarFichaModal';
import AgregarMateriaModal from '../AgregarMateriaModal/AgregarMateriaModal';
import AgregarDiaSemanaFichaModal from '../AgregarDiaSemanaFichaModal/AgregarDiaSemanaFichaModal';
import AgregarHorarioAmbienteModal from '../AgregarHorarioAmbienteModal/AgregarHorarioAmbienteModal';
import AgregarHorarioFichaModal from '../AgregarHorarioFichaModal/AgregarHorarioFichaModal';
import AgregarHorarioInstructorModal from '../AgregarHorarioInstructorModal/AgregarHorarioInstructorModal';
import AgregarResultadoModal from '../AgregarResultadoModal/AgregarResultadoModal';
import AgregarUsuarioModal from '../AgregarUsuarioModal/AgregarUsuarioModal';


export default function Header() {
    const instructorFields = [
        { name: 'nombre', label: 'Nombre', type: 'text', placeholder: 'Ingrese el nombre' },
        { name: 'email', label: 'Email', type: 'email', placeholder: 'Ingrese el email' },
        { name: 'password', label: 'Contraseña', type: 'password', placeholder: 'Ingrese la contraseña' },
    ];

    const ambienteFields = [
        { name: 'nombre', label: 'Nombre', type: 'text', placeholder: 'Ingrese el nombre del ambiente' },
        { name: 'bloque', label: 'Bloque', type: 'text', placeholder: 'Ingrese el bloque' },
        { name: 'sede', label: 'Sede', type: 'text', placeholder: 'Ingrese la sede' },
    ];

    const fichaFields = [
        { name: 'numeroFicha', label: 'Número de Ficha', type: 'text', placeholder: 'Ingrese el número de ficha' },
        { name: 'idMateria', label: 'ID Materia', type: 'text', placeholder: 'Ingrese el ID de la materia' },
      ];

      const materiaFields = [
        { name: 'nombre', label: 'Nombre de la Materia', type: 'text', placeholder: 'Ingrese el nombre de la materia' },
        //{ name: 'codigo', label: 'Código de Materia', type: 'text', placeholder: 'Ingrese el código de la materia' },
      ];  

      const diaSemanaFichaFields = [
        { name: 'idFicha', label: 'ID Ficha', type: 'text', placeholder: 'Ingrese el ID de la ficha' },
        { name: 'diaSemana', label: 'Día de la Semana', type: 'text', placeholder: 'Ingrese el día de la semana' },
      ];

      const horarioAmbienteFields = [
        { name: 'idAmbiente', label: 'ID Ambiente', type: 'text', placeholder: 'Ingrese el ID del ambiente' },
        { name: 'jornada', label: 'Jornada', type: 'text', placeholder: 'Ingrese la jornada (Mañana, Tarde, Noche)' },
        { name: 'diaSemana', label: 'Día de la Semana', type: 'text', placeholder: 'Ingrese el día de la semana' },
        { name: 'horaInicio', label: 'Hora de Inicio', type: 'text', placeholder: 'Ingrese la hora de inicio (HH:MM)' },
        { name: 'horaFin', label: 'Hora de Fin', type: 'text', placeholder: 'Ingrese la hora de fin (HH:MM)' },
    ];

    const horarioFichaFields = [
      { name: 'jornada', label: 'Jornada', type: 'text', placeholder: 'Ingrese la jornada (Mañana, Tarde, Noche)' },
      { name: 'diaSemana', label: 'Día de la Semana', type: 'text', placeholder: 'Ingrese el día de la semana' },
      { name: 'horaInicio', label: 'Hora de Inicio', type: 'text', placeholder: 'Ingrese la hora de inicio (HH:MM)' },
      { name: 'horaFin', label: 'Hora de Fin', type: 'text', placeholder: 'Ingrese la hora de fin (HH:MM)' },
      { name: 'idFicha', label: 'ID Ficha', type: 'text', placeholder: 'Ingrese el ID de la ficha' },
      { name: 'idMateria', label: 'ID Materia', type: 'text', placeholder: 'Ingrese el ID de la materia' },
  ];
  const horarioInstructorFields = [
    { name: 'jornada', label: 'Jornada', type: 'text', placeholder: 'Ingrese la jornada (Mañana, Tarde, Noche)' },
    { name: 'diaSemana', label: 'Día de la Semana', type: 'text', placeholder: 'Ingrese el día de la semana' },
    { name: 'horaInicio', label: 'Hora de Inicio', type: 'text', placeholder: 'Ingrese la hora de inicio (HH:MM)' },
    { name: 'horaFin', label: 'Hora de Fin', type: 'text', placeholder: 'Ingrese la hora de fin (HH:MM)' },
    { name: 'idInstructor', label: 'ID Instructor', type: 'text', placeholder: 'Ingrese el ID del instructor' },
    { name: 'idFicha', label: 'ID Ficha', type: 'text', placeholder: 'Ingrese el ID de la ficha' },
    { name: 'idAmbiente', label: 'ID Ambiente', type: 'text', placeholder: 'Ingrese el ID del ambiente' },
];

const resultadoFields = [
  { name: 'descripcion', label: 'Descripción del Resultado', type: 'text', placeholder: 'Ingrese la descripción del resultado de aprendizaje' },
];

const usuarioFields = [
  { name: 'email', label: 'Email', type: 'email', placeholder: 'Ingrese el email' },
  { name: 'password', label: 'Contraseña', type: 'password', placeholder: 'Ingrese la contraseña' },
  { name: 'rol', label: 'Rol', type: 'text', placeholder: 'Ingrese el rol (INSTRUCTOR/ADMINISTRADOR)' },
];


    return (
        <div className="fixed top-0 w-full flex justify-between items-center h-16 shadow-md bg-white px-6 z-50 text-gray-700">
            <span><Logo /></span>
 
            <div className="flex space-x-4">
                {/* Modal de agregar instructor */}
                <AgregarInstructorModal fields={instructorFields} />

                {/* Modal de agregar ambiente */}
                <AgregarAmbienteModal fields={ambienteFields} />

                  {/* Modal de agregar ficha */}
                <AgregarFichaModal fields={fichaFields} />

                 {/* Modal de agregar materia */}
                <AgregarMateriaModal fields={materiaFields} />

                    {/* Modal de asignar días de la semana a una ficha */}
        <AgregarDiaSemanaFichaModal fields={diaSemanaFichaFields} />

             {/* Modal de agregar horario de ambiente */}
             <AgregarHorarioAmbienteModal fields={horarioAmbienteFields} />

              {/* Modal de agregar horario de ficha */}
              <AgregarHorarioFichaModal fields={horarioFichaFields} />

               {/* Modal de agregar horario de instructor */}
               <AgregarHorarioInstructorModal fields={horarioInstructorFields} />
            


                {/* Modal de agregar resultado de aprendizaje */}
                <AgregarResultadoModal fields={resultadoFields} />

                  {/* Modal de agregar usuario */}
                  <AgregarUsuarioModal fields={usuarioFields} />
            </div>
        </div>
    );
}
