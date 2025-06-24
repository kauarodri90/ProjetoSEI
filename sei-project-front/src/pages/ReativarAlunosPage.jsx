import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const ReativarAlunosPage = () => {
  const [inativos, setInativos] = useState([]);
  const navigate = useNavigate();

  const fetchInativos = async () => {
    try {
      const res = await api.get('/alunos?status=false');
      setInativos(res.data);
    } catch (error) {
      console.error('Erro ao buscar alunos inativos:', error);
    }
  };

  const handleReativar = async (id) => {
    try {
      await api.patch(`/alunos/${id}/status`, { ativo: true });
      fetchInativos();
    } catch (error) {
      console.error('Erro ao reativar aluno:', error);
    }
  };

  useEffect(() => {
    fetchInativos();
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ color: '#fff' }}>Reativar Alunos</h2>

      {inativos.length === 0 ? (
        <p style={{ color: '#fff' }}>Nenhum aluno inativo.</p>
      ) : (
        <table className="tabela">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Matrícula</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {inativos.map((a) => (
              <tr key={a.id}>
                <td>{a.nome}</td>
                <td>{a.matricula}</td>
                <td>
                  <div className="botoes-acoes">
                    <button onClick={() => handleReativar(a.id)}>Reativar</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ReativarAlunosPage;