import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const ReativarDisciplinasPage = () => {
  const [disciplinasInativas, setDisciplinasInativas] = useState([]);
  const navigate = useNavigate();

  const fetchInativas = async () => {
    try {
      const res = await api.get('/disciplinas?status=INATIVO');
      setDisciplinasInativas(res.data);
    } catch (error) {
      console.error('Erro ao buscar disciplinas inativas:', error);
    }
  };

  const handleReativar = async (id) => {
    try {
      await api.patch(`/disciplinas/${id}/status`, { status: 'ATIVO' });
      fetchInativas();
    } catch (error) {
      console.error('Erro ao reativar disciplina:', error);
    }
  };

  useEffect(() => {
    fetchInativas();
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ color: '#fff' }}>Reativar Disciplinas</h2>
      {disciplinasInativas.length === 0 ? (
        <p style={{ color: '#fff' }}>Nenhuma disciplina inativa.</p>
      ) : (
        <table className="tabela">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Curso</th>
              <th>Período</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {disciplinasInativas.map((d) => (
              <tr key={d.id}>
                <td>{d.nome}</td>
                <td>{d.curso}</td>
                <td>{d.periodo}</td>
                <td>
                  <div className="botoes-acoes">
                    <button onClick={() => handleReativar(d.id)}>Reativar</button>
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

export default ReativarDisciplinasPage;