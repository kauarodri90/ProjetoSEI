import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const AlunoPage = () => {
  const [alunos, setAlunos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    carregarAlunos();
  }, []);

  const carregarAlunos = async () => {
    try {
      const response = await api.get('/alunos');
      setAlunos(response.data);
    } catch (error) {
      console.error('Erro ao carregar alunos:', error);
    }
  };

  const handleExcluir = async (id) => {
    await api.patch(`/alunos/${id}/status`, { ativo: false });
    carregarAlunos();
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ color: '#fff' }}>Gerenciar Alunos</h2>

      <button
        onClick={() => navigate('/alunos/novo')}
        className="centered-button"
      >
        Incluir Novo Aluno
      </button>

      <table className="tabela">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Matrícula</th>
            <th>Curso</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {alunos.map((aluno) => (
            <tr key={aluno.id}>
              <td>{aluno.nome}</td>
              <td>{aluno.matricula}</td>
              <td>{aluno.curso}</td>
              <td>
                <div className="botoes-acoes">
                  <button onClick={() => navigate(`/alunos/editar/${aluno.id}`)}>Editar</button>
                  <button onClick={() => handleExcluir(aluno.id)}>Excluir</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AlunoPage;
