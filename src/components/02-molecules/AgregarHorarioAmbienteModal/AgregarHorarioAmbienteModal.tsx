import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import DynamicForm from '../DynamicForm/DynamicForm';
import Button from '@/components/01-atoms/Button/Button';
import { toast } from 'react-toastify';

interface AgregarHorarioAmbienteModalProps {
  fields: { name: string; label: string; type: string; placeholder?: string }[];
}

export default function AgregarHorarioAmbienteModal({ fields }: AgregarHorarioAmbienteModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSubmit = async (data: Record<string, string>) => {
    setLoading(true);
    try {
      const response = await fetch('/api/horarios/ambientes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Error al crear el horario para el ambiente. Verifica los datos e intenta nuevamente.');
      }

      const result = await response.json();
      console.log('Horario de ambiente agregado con éxito:', result);

      // Mostrar notificación de éxito usando react-toastify
      toast.success('Horario de ambiente agregado con éxito.');

      handleCloseModal();
    } catch (error) {
      console.error('Error:', error);
      // Mostrar notificación de error usando react-toastify
      toast.error(
        error instanceof Error
          ? error.message
          : 'Error inesperado al crear el horario para el ambiente. Intenta nuevamente.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Button
        text="Agregar Horario de Ambiente"
        onClick={handleOpenModal}
        className="bg-purple-500 text-white hover:bg-purple-700"
      />
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2 className="text-xl font-semibold mb-4">Nuevo Horario para Ambiente</h2>
        <DynamicForm fields={fields} onSubmit={handleSubmit} />
        {loading && <p>Cargando...</p>}
      </Modal>
    </div>
  );
}
