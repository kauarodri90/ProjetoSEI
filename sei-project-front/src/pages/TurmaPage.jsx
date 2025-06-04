import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const TurmaPage = () => {
  const [turmas, setTurmas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    carregarTurmas();
  }, []);

  const carregarTurmas = async () => {
    const response = await api.get('/turmas');
    setTurmas(response.data);
  };

  const handleExcluir = async (id) => {
    await api.patch(`/turmas/${id}/status`, { status: 'INATIVO' });
    carregarTurmas();
  };

  return (
    <div>
      <h2>Gerenciar Turmas</h2>
      <button onClick={() => navigate('/turmas/novo')}>Incluir Nova Turma</button>
      <table>
        <thead>
          <tr>
            <th>Curso</th>
            <th>Período Letivo</th>
            <th>Turno</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {turmas.map((turma) => (
            <tr key={turma.id}>
              <td>{turma.curso}</td>
              <td>{turma.periodo_letivo}</td>
              <td>{turma.turno}</td>
              <td>
                <button onClick={() => navigate(`/turmas/editar/${turma.id}`)}>Editar</button>
                <button onClick={() => handleExcluir(turma.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TurmaPage;