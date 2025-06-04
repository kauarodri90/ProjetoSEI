import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const DisciplinaPage = () => {
  const [disciplinas, setDisciplinas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    carregarDisciplinas();
  }, []);

  const carregarDisciplinas = async () => {
    const response = await api.get('/disciplinas');
    setDisciplinas(response.data);
  };

  const handleExcluir = async (id) => {
    await api.patch(`/disciplinas/${id}/status`, { status: 'INATIVO' });
    carregarDisciplinas();
  };

  return (
    <div>
      <h2>Gerenciar Disciplinas</h2>
      <button onClick={() => navigate('/disciplinas/novo')}>Incluir Nova Disciplina</button>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Código</th>
            <th>Curso</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {disciplinas.map((disciplina) => (
            <tr key={disciplina.id}>
              <td>{disciplina.nome}</td>
              <td>{disciplina.codigo}</td>
              <td>{disciplina.curso}</td>
              <td>
                <button onClick={() => navigate(`/disciplinas/editar/${disciplina.id}`)}>Editar</button>
                <button onClick={() => handleExcluir(disciplina.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisciplinaPage;