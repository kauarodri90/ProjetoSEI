import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const ReativarTurmasPage = () => {
  const [inativas, setInativas] = useState([]);
  const navigate = useNavigate();

  const fetchInativas = async () => {
    try {
      const res = await api.get('/turmas?status=INATIVO');
      setInativas(res.data);
    } catch (err) {
      console.error('Erro ao carregar turmas inativas:', err);
    }
  };

  const handleReativar = async (id) => {
    try {
      await api.patch(`/turmas/${id}/status`, { status: 'ATIVO' });
      fetchInativas();
    } catch (err) {
      console.error('Erro ao reativar turma:', err);
    }
  };

  useEffect(() => {
    fetchInativas();
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ color: '#fff' }}>Reativar Turmas</h2>
      {inativas.length === 0 ? (
        <p style={{ color: '#fff' }}>Nenhuma turma inativa.</p>
      ) : (
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
            {inativas.map((turma) => (
              <tr key={turma.id}>
                <td>{turma.curso}</td>
                <td>{turma.periodo_letivo}</td>
                <td>{turma.turno}</td>
                <td>{turma.horario_inicio}</td>
                <td>{turma.horario_fim}</td>
                <td>
                  <div className="botoes-acoes">
                    <button onClick={() => handleReativar(turma.id)}>Reativar</button>
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

export default ReativarTurmasPage;