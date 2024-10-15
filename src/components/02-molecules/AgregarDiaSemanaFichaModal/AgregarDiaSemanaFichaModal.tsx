import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import DynamicForm from '../DynamicForm/DynamicForm';
import Button from '@/components/01-atoms/Button/Button';
import { toast } from 'react-toastify';

interface AgregarDiaSemanaFichaModalProps {
  fields: { name: string; label: string; type: string; placeholder?: string }[];
}

export default function AgregarDiaSemanaFichaModal({ fields }: AgregarDiaSemanaFichaModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSubmit = async (data: Record<string, string>) => {
    setLoading(true);
    try {
      const response = await fetch('/api/fichas/dias', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Error al asignar el día de la semana a la ficha. Verifica los datos e intenta nuevamente.');
      }

      const result = await response.json();
      console.log('Día de la semana asignado a la ficha con éxito:', result);

      // Mostrar notificación de éxito usando react-toastify
      toast.success('Día de la semana asignado con éxito.');

      handleCloseModal();
    } catch (error) {
      console.error('Error:', error);
      // Mostrar notificación de error usando react-toastify
      toast.error(
        error instanceof Error
          ? error.message
          : 'Error inesperado al asignar el día de la semana a la ficha. Intenta nuevamente.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Button
        text="Asignar Día a Ficha"
        onClick={handleOpenModal}
        className="bg-purple-500 text-white hover:bg-purple-700"
      />
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2 className="text-xl font-semibold mb-4">Asignar Día a Ficha</h2>
        <DynamicForm fields={fields} onSubmit={handleSubmit} />
        {loading && <p>Cargando...</p>}
      </Modal>
    </div>
  );
}
