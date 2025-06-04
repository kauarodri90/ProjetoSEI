import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../services/api';
import DisciplinaForm from '../components/DisciplinaForm';

export default function DisciplinaFormPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    if (id) {
      api.get(`/disciplinas/${id}`).then(res => setInitialData(res.data));
    }
  }, [id]);

  const handleSubmit = async (disciplina) => {
    if (id) {
      await api.put(`/disciplinas/${id}`, disciplina);
    } else {
      await api.post('/disciplinas', disciplina);
    }
    navigate('/disciplinas');
  };

  return (
    <div>
      <h2>{id ? 'Editar Disciplina' : 'Nova Disciplina'}</h2>
      <DisciplinaForm onSubmit={handleSubmit} initialData={initialData} />
    </div>
  );
}