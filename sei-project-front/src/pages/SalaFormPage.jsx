import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../services/api';
import SalaForm from '../components/SalaForm';

export default function SalaFormPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    if (id) {
      api.get(`/salas/${id}`).then(res => setInitialData(res.data));
    }
  }, [id]);

  const handleSubmit = async (sala) => {
    try {
      const payload = {
        ...sala,
        capacidade: parseInt(sala.capacidade, 10),
      };

      if (id) {
        await api.put(`/salas/${id}`, payload);
      } else {
        await api.post('/salas', payload);
      }

      navigate('/salas');
    } catch (error) {
      console.error('Erro ao salvar sala:', error);
    }
  };

  return (
    <div>
      <h2>{id ? 'Editar Sala' : 'Nova Sala'}</h2>
      <SalaForm onSubmit={handleSubmit} initialData={initialData} />
    </div>
  );
}