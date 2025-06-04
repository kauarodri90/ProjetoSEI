import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import ProfessorForm from '../components/ProfessorForm';

const ProfessorPage = () => {
  const [professores, setProfessores] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    carregarProfessores();
  }, []);

  const carregarProfessores = async () => {
    try {
      const response = await api.get('/professores');
      setProfessores(response.data);
    } catch (error) {
      console.error('Erro ao carregar professores:', error);
    }
  };

  const handleExcluir = async (id) => {
    await api.patch(`/professores/${id}/status`, { status: 'INATIVO' });
    carregarProfessores();
  };

  return (
    <div>
      <h2>Gerenciar Professores</h2>
      <button onClick={() => navigate('/professores/novo')}>Incluir Novo Professor</button>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>Curso</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {professores.map((professor) => (
            <tr key={professor.id}>
              <td>{professor.nome}</td>
              <td>{professor.cpf}</td>
              <td>{professor.curso}</td>
              <td>{professor.email}</td>
              <td>
                <button onClick={() => navigate(`/professores/editar/${professor.id}`)}>Editar</button>
                <button onClick={() => handleExcluir(professor.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProfessorPage;