import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const ReativarSalasPage = () => {
  const [salasInativas, setSalasInativas] = useState([]);

  const fetchInativas = async () => {
    try {
      const res = await api.get('/salas?status=INATIVO');
      setSalasInativas(res.data);
    } catch (error) {
      console.error('Erro ao buscar salas inativas:', error);
    }
  };

  const handleReativar = async (id) => {
    try {
      await api.patch(`/salas/${id}/status`, { status: 'ATIVO' });
      fetchInativas();
    } catch (error) {
      console.error('Erro ao reativar sala:', error);
    }
  };

  useEffect(() => {
    fetchInativas();
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ color: '#fff' }}>Reativar Salas</h2>
      {salasInativas.length === 0 ? (
        <p style={{ color: '#fff' }}>Nenhuma sala inativa.</p>
      ) : (
        <table className="tabela">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Capacidade</th>
              <th>Local</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {salasInativas.map((s) => (
              <tr key={s.id}>
                <td>{s.nome}</td>
                <td>{s.capacidade}</td>
                <td>{s.local}</td>
                <td>
                  <div className="botoes-acoes">
                    <button onClick={() => handleReativar(s.id)}>Reativar</button>
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

export default ReativarSalasPage;