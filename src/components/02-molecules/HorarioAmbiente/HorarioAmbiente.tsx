// src/components/02-molecules/HorarioInstructor.tsx

import React from 'react';

export default function HorarioAmbiente() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="text-lg font-semibold">
          <span>Jornada: Mañana</span>
        </div>
        <div className="text-lg font-semibold">
          <span>Trimestre Actual: III TRIMESTRE 2024</span>
        </div>
      </div>
      <div className="flex justify-start items-center mb-4">
        <span className="text-sm font-medium">Ambiente: 2</span>
      </div>
      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 p-2">Lunes</th>
            <th className="border border-gray-300 p-2">Martes</th>
            <th className="border border-gray-300 p-2">Miércoles</th>
            <th className="border border-gray-300 p-2">Jueves</th>
            <th className="border border-gray-300 p-2">Viernes</th>
            <th className="border border-gray-300 p-2">Sábado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-4">
              <strong>Asignatura:</strong> Inteligencia Empresarial<br />
              <strong>Ficha:</strong> 2929143<br />
              <strong>Tema:</strong> Ejercer derechos fundamentales en el marco del trabajo.<br />
              <strong>(RA):</strong> 1,2,3,4<br />
              <strong>Instructor:</strong> Alfredo Bermejo<br />
              <strong>Bloque:</strong> 5<br />
              <strong>Sede:</strong> Divino niño
            </td>
            <td className="border border-gray-300 p-4">
              <strong>Asignatura:</strong> Inteligencia Empresarial<br />
              <strong>Ficha:</strong> 2929143<br />
              <strong>Tema:</strong> Ejercer derechos fundamentales en el marco del trabajo.<br />
              <strong>(RA):</strong> 1,2,3,4<br />
              <strong>Instructor:</strong> Alfredo Bermejo<br />
              <strong>Bloque:</strong> 5<br />
              <strong>Sede:</strong> Divino niño
            </td>
            <td className="border border-gray-300 p-4">
              <strong>Asignatura:</strong> Inteligencia Empresarial<br />
              <strong>Ficha:</strong> 2929143<br />
              <strong>Tema:</strong> Ejercer derechos fundamentales en el marco del trabajo.<br />
              <strong>(RA):</strong> 1,2,3,4<br />
              <strong>Instructor:</strong> Alfredo Bermejo<br />
              <strong>Bloque:</strong> 5<br />
              <strong>Sede:</strong> Divino niño
            </td>
            <td className="border border-gray-300 p-4">
              <strong>Asignatura:</strong> Inteligencia Empresarial<br />
              <strong>Ficha:</strong> 2929143<br />
              <strong>Tema:</strong> Ejercer derechos fundamentales en el marco del trabajo.<br />
              <strong>(RA):</strong> 1,2,3,4<br />
              <strong>Instructor:</strong> Alfredo Bermejo<br />
              <strong>Bloque:</strong> 5<br />
              <strong>Sede:</strong> Divino niño
            </td>
            <td className="border border-gray-300 p-4">
              <strong>Asignatura:</strong> Inteligencia Empresarial<br />
              <strong>Ficha:</strong> 2929143<br />
              <strong>Tema:</strong> Ejercer derechos fundamentales en el marco del trabajo.<br />
              <strong>(RA):</strong> 1,2,3,4<br />
              <strong>Instructor:</strong> Alfredo Bermejo<br />
              <strong>Bloque:</strong> 5<br />
              <strong>Sede:</strong> Divino niño
            </td>
            <td className="border border-gray-300 p-4">
              <strong>Asignatura:</strong> Inteligencia Empresarial<br />
              <strong>Ficha:</strong> 2929143<br />
              <strong>Tema:</strong> Ejercer derechos fundamentales en el marco del trabajo.<br />
              <strong>(RA):</strong> 1,2,3,4<br />
              <strong>Instructor:</strong> Alfredo Bermejo<br />
              <strong>Bloque:</strong> 5<br />
              <strong>Sede:</strong> Divino niño
            </td>
          </tr>
        </tbody>
      </table>
      <div className="mt-4">
        <button className="text-blue-500 font-semibold hover:underline">VER HISTORIAL DE TRIMESTRES</button>
      </div>
    </div>
  );
}
