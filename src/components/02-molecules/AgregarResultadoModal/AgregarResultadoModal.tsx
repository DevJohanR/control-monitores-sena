import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import DynamicForm from '../DynamicForm/DynamicForm';
import Button from '@/components/01-atoms/Button/Button';
import { toast } from 'react-toastify';
import Icon from '@/components/00-particles/icons/Icon';

interface AgregarResultadoModalProps {
  fields: { name: string; label: string; type: string; placeholder?: string }[];
}

export default function AgregarResultadoModal({ fields }: AgregarResultadoModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSubmit = async (data: Record<string, string>) => {
    setLoading(true);
    try {
      const response = await fetch('/api/resultados', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Error al crear el resultado de aprendizaje. Verifica los datos e intenta nuevamente.');
      }

      const result = await response.json();
      console.log('Resultado de aprendizaje agregado con éxito:', result);

      // Mostrar notificación de éxito usando react-toastify
      toast.success('Resultado de aprendizaje agregado con éxito.');

      handleCloseModal();
    } catch (error) {
      console.error('Error:', error);
      // Mostrar notificación de error usando react-toastify
      toast.error(
        error instanceof Error
          ? error.message
          : 'Error inesperado al crear el resultado de aprendizaje. Intenta nuevamente.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Button
        text="Resultado de Aprendizaje"
        onClick={handleOpenModal}
        className="bg-slate-600 text-white hover:bg-blue-500"
        icon={<Icon name="plus" />}
      />
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2 className="text-xl font-semibold mb-4">Nuevo Resultado de Aprendizaje</h2>
        <DynamicForm fields={fields} onSubmit={handleSubmit} />
        {loading && <p>Cargando...</p>}
      </Modal>
    </div>
  );
}
