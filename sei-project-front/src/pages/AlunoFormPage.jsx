import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../services/api';
import AlunoForm from '../components/AlunoForm';

export default function AlunoFormPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    if (id) {
      api.get(`/alunos/${id}`).then(res => setInitialData(res.data));
    }
  }, [id]);

  const handleSubmit = async (aluno) => {
    if (id) {
      await api.put(`/alunos/${id}`, aluno);
    } else {
      await api.post('/alunos', aluno);
    }
    navigate('/alunos');
  };

  return (
    <div>
      <h2>{id ? 'Editar Aluno' : 'Novo Aluno'}</h2>
      <AlunoForm onSubmit={handleSubmit} initialData={initialData} />
    </div>
  );
}