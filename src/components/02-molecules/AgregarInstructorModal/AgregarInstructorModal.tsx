// src/components/02-molecules/AgregarInstructorModal.tsx

import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import DynamicForm from '../DynamicForm/DynamicForm';
import Button from '@/components/01-atoms/Button/Button';

interface AgregarInstructorModalProps {
  fields: { name: string; label: string; type: string; placeholder?: string }[];
}

export default function AgregarInstructorModal({ fields }: AgregarInstructorModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSubmit = (data: Record<string, string>) => {
    console.log('Formulario enviado:', data);
    // Aquí puedes manejar el envío del formulario (API call, etc.)
    handleCloseModal(); // Cierra el modal después de enviar
  };

  return (
    <div>
      <Button
        text="Agregar Instructor"
        onClick={handleOpenModal}
        className="bg-blue-500 text-white hover:bg-blue-700"
      />
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2 className="text-xl font-semibold mb-4">Nuevo Instructor</h2>
        <DynamicForm fields={fields} onSubmit={handleSubmit} />
      </Modal>
    </div>
  );
}
