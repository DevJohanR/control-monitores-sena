import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import DynamicForm from '../DynamicForm/DynamicForm';
import Button from '@/components/01-atoms/Button/Button';
import { toast } from 'react-toastify';

interface AgregarHorarioInstructorModalProps {
  fields: { name: string; label: string; type: string; placeholder?: string }[];
}

export default function AgregarHorarioInstructorModal({ fields }: AgregarHorarioInstructorModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSubmit = async (data: Record<string, string>) => {
    setLoading(true);
    try {
      const response = await fetch('/api/horarios/instructors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Error al agregar el horario del instructor. Verifica los datos e intenta nuevamente.');
      }

      const result = await response.json();
      console.log('Horario de instructor agregado con éxito:', result);

      // Mostrar notificación de éxito usando react-toastify
      toast.success('Horario de instructor agregado con éxito.');

      handleCloseModal();
    } catch (error) {
      console.error('Error:', error);
      // Mostrar notificación de error usando react-toastify
      toast.error(
        error instanceof Error
          ? error.message
          : 'Error inesperado al agregar el horario del instructor. Intenta nuevamente.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Button
        text="Agregar Horario de Instructor"
        onClick={handleOpenModal}
        className="bg-purple-500 text-white hover:bg-purple-700"
      />
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2 className="text-xl font-semibold mb-4">Nuevo Horario para Instructor</h2>
        <DynamicForm fields={fields} onSubmit={handleSubmit} />
        {loading && <p>Cargando...</p>}
      </Modal>
    </div>
  );
}
