import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../services/api';
import ProfessorForm from '../components/ProfessorForm';

export default function ProfessorFormPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    if (id) {
      api.get(`/professores/${id}`).then(res => setInitialData(res.data));
    }
  }, [id]);

  const handleSubmit = async (professor) => {
    if (id) {
      await api.put(`/professores/${id}`, professor);
    } else {
      await api.post('/professores', professor);
    }
    navigate('/professores');
  };

  return (
    <div>
      <h2>{id ? 'Editar Professor' : 'Novo Professor'}</h2>
      <ProfessorForm onSubmit={handleSubmit} initialData={initialData} />
    </div>
  );
}