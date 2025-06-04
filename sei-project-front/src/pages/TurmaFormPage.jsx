import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../services/api';
import TurmaForm from '../components/TurmaForm';

export default function TurmaFormPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    if (id) {
      api.get(`/turmas/${id}`).then(res => setInitialData(res.data));
    }
  }, [id]);

  const handleSubmit = async (turma) => {
    if (id) {
      await api.put(`/turmas/${id}`, turma);
    } else {
      await api.post('/turmas', turma);
    }
    navigate('/turmas');
  };

  return (
    <div>
      <h2>{id ? 'Editar Turma' : 'Nova Turma'}</h2>
      <TurmaForm onSubmit={handleSubmit} initialData={initialData} />
    </div>
  );
}