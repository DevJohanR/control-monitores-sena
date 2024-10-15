import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import DynamicForm from '../DynamicForm/DynamicForm';
import Button from '@/components/01-atoms/Button/Button';
import { toast } from 'react-toastify';
import Icon from '@/components/00-particles/icons/Icon';

interface AgregarFichaModalProps {
  fields: { name: string; label: string; type: string; placeholder?: string }[];
}

export default function AgregarFichaModal({ fields }: AgregarFichaModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSubmit = async (data: Record<string, string>) => {
    setLoading(true);
  
    // Convertir idMateria a número antes de enviarlo
    const parsedData = {
      ...data,
      idMateria: parseInt(data.idMateria, 10), // Convertir idMateria de string a number
    };
  
    try {
      const response = await fetch('/api/fichas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(parsedData), // Usar parsedData en lugar de data
      });
  
      if (!response.ok) {
        throw new Error('Error al agregar la ficha. Verifica los datos e intenta nuevamente.');
      }
  
      const result = await response.json();
      console.log('Ficha agregada con éxito:', result);
  
      // Mostrar notificación de éxito usando react-toastify
      toast.success('Ficha agregada con éxito.');
  
      handleCloseModal();
    } catch (error) {
      console.error('Error:', error);
      // Mostrar notificación de error usando react-toastify
      toast.error(
        error instanceof Error
          ? error.message
          : 'Error inesperado al agregar la ficha. Intenta nuevamente.'
      );
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div>
      <Button
        text="Ficha"
        onClick={handleOpenModal}
        className="bg-slate-600 text-white hover:bg-blue-500"
        icon={<Icon name="plus" />}
      />
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2 className="text-xl font-semibold mb-4">Nueva Ficha</h2>
        <DynamicForm fields={fields} onSubmit={handleSubmit} />
        {loading && <p>Cargando...</p>}
      </Modal>
    </div>
  );
}
