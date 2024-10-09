// src/components/02-molecules/DynamicForm.tsx

import React, { useState } from 'react';

interface Field {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
}

interface DynamicFormProps {
  fields: Field[];
  onSubmit: (data: Record<string, string>) => void;
}

export default function DynamicForm({ fields, onSubmit }: DynamicFormProps) {
  // Estado para mantener los valores de cada campo del formulario
  const [formData, setFormData] = useState<Record<string, string>>({});

  // Maneja el cambio de valores en los inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Maneja el envío del formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      {fields.map((field) => (
        <div key={field.name}>
          <label className="block text-sm font-medium mb-1">{field.label}</label>
          <input
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
      ))}
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
        Guardar
      </button>
    </form>
  );
}
