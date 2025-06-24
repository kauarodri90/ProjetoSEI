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
    try {
      const response = await api.get('/disciplinas');
      setDisciplinas(response.data);
    } catch (error) {
      console.error('Erro ao carregar disciplinas:', error);
    }
  };

  const handleExcluir = async (id) => {
    await api.patch(`/disciplinas/${id}/status`, { status: 'INATIVO' });
    carregarDisciplinas();
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ color: '#fff' }}>Gerenciar Disciplinas</h2>

      <button
        onClick={() => navigate('/disciplinas/novo')}
        className="centered-button"
      >
        Incluir Nova Disciplina
      </button>

      <table className="tabela">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Código</th>
            <th>Curso</th>
            <th>Período</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {disciplinas.map((disciplina) => (
            <tr key={disciplina.id}>
              <td>{disciplina.nome}</td>
              <td>{disciplina.codigo}</td>
              <td>{disciplina.curso}</td>
              <td>{disciplina.periodo}</td>
              <td>
                <div className="botoes-acoes">
                  <button onClick={() => navigate(`/disciplinas/editar/${disciplina.id}`)}>Editar</button>
                  <button onClick={() => handleExcluir(disciplina.id)}>Excluir</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisciplinaPage;