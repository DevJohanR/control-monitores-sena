// src/components/02-molecules/HorarioInstructor.tsx

import React, { useEffect, useState } from 'react';

interface Instructor {
  id: number;
  nombre: string;
}


export default function HorarioInstructor() {
  const [instructores, setInstructores] = useState<Instructor[]>([]);
  const [selectedInstructor, setSelectedInstructor] = useState<number | null>(null);


  useEffect(() => {
    const fetchInstructors = async () => {
      try {
        const response = await fetch('/api/instructors'); // Asegúrate de que la ruta coincide con la de tu API
        const data = await response.json();
        setInstructores(data);
      } catch (error) {
        console.error('Error al obtener los instructores:', error);
      }
    };

    fetchInstructors();
  }, []);



  const handleInstructorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedInstructor(Number(e.target.value));
  };


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
        <label htmlFor="instructor" className="text-sm font-medium mr-2">Instructor:</label>
        <select
          id="instructor"
          value={selectedInstructor || ''}
          onChange={handleInstructorChange}
          className="border p-2 rounded"
        >
          <option value="" disabled>Selecciona un instructor</option>
          {instructores.map((instructor) => (
            <option key={instructor.id} value={instructor.id}>
              {instructor.nombre}
            </option>
          ))}
        </select>
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
              <strong>Ambiente:</strong> 1<br />
              <strong>Bloque:</strong> 5<br />
              <strong>Sede:</strong> Divino niño
            </td>
            <td className="border border-gray-300 p-4">
              <strong>Asignatura:</strong> Inteligencia Empresarial<br />
              <strong>Ficha:</strong> 2929143<br />
              <strong>Tema:</strong> Ejercer derechos fundamentales en el marco del trabajo.<br />
              <strong>(RA):</strong> 1,2,3,4<br />
              <strong>Ambiente:</strong> 1<br />
              <strong>Bloque:</strong> 5<br />
              <strong>Sede:</strong> Divino niño
            </td>
            <td className="border border-gray-300 p-4">
              <strong>Asignatura:</strong> Inteligencia Empresarial<br />
              <strong>Ficha:</strong> 2929143<br />
              <strong>Tema:</strong> Ejercer derechos fundamentales en el marco del trabajo.<br />
              <strong>(RA):</strong> 1,2,3,4<br />
              <strong>Ambiente:</strong> 1<br />
              <strong>Bloque:</strong> 5<br />
              <strong>Sede:</strong> Divino niño
            </td>
            <td className="border border-gray-300 p-4">
              <strong>Asignatura:</strong> Inteligencia Empresarial<br />
              <strong>Ficha:</strong> 2929143<br />
              <strong>Tema:</strong> Ejercer derechos fundamentales en el marco del trabajo.<br />
              <strong>(RA):</strong> 1,2,3,4<br />
              <strong>Ambiente:</strong> 1<br />
              <strong>Bloque:</strong> 5<br />
              <strong>Sede:</strong> Divino niño
            </td>
            <td className="border border-gray-300 p-4">
              <strong>Asignatura:</strong> Inteligencia Empresarial<br />
              <strong>Ficha:</strong> 2929143<br />
              <strong>Tema:</strong> Ejercer derechos fundamentales en el marco del trabajo.<br />
              <strong>(RA):</strong> 1,2,3,4<br />
              <strong>Ambiente:</strong> 1<br />
              <strong>Bloque:</strong> 5<br />
              <strong>Sede:</strong> Divino niño
            </td>
            <td className="border border-gray-300 p-4">
              <strong>Asignatura:</strong> Inteligencia Empresarial<br />
              <strong>Ficha:</strong> 2929143<br />
              <strong>Tema:</strong> Ejercer derechos fundamentales en el marco del trabajo.<br />
              <strong>(RA):</strong> 1,2,3,4<br />
              <strong>Ambiente:</strong> 1<br />
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
