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
    try {
      const response = await api.get('/turmas');
      setTurmas(response.data);
    } catch (error) {
      console.error('Erro ao carregar turmas:', error);
    }
  };

  const handleExcluir = async (id) => {
    await api.patch(`/turmas/${id}/status`, { status: 'INATIVO' });
    carregarTurmas();
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ color: '#fff' }}>Gerenciar Turmas</h2>

      <button
        onClick={() => navigate('/turmas/novo')}
        className="centered-button"
      >
        Incluir Nova Turma
      </button>

      <table className="tabela">
        <thead>
          <tr>
            <th>Curso</th>
            <th>Período Letivo</th>
            <th>Turno</th>
            <th>Horário Início</th>
            <th>Horário Fim</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {turmas.map((turma) => (
            <tr key={turma.id}>
              <td>{turma.curso}</td>
              <td>{turma.periodo_letivo}</td>
              <td>{turma.turno}</td>
              <td>{turma.horario_inicio}</td>
              <td>{turma.horario_fim}</td>
              <td>
                <div className="botoes-acoes">
                  <button onClick={() => navigate(`/turmas/editar/${turma.id}`)}>Editar</button>
                  <button onClick={() => handleExcluir(turma.id)}>Excluir</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TurmaPage;