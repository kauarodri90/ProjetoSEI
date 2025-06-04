import React, { useEffect, useState } from 'react';
import api from '../services/api';

const ReativarSalasPage = () => {
  const [salasInativas, setSalasInativas] = useState([]);

  const fetchInativas = async () => {
    const res = await api.get('/salas');
    const filtradas = res.data.filter(s => s.status === 'INATIVO');
    setSalasInativas(filtradas);
  };

  const handleReativar = async (id) => {
    await api.patch(`/salas/${id}/status`, { status: 'ATIVO' });
    fetchInativas();
  };

  useEffect(() => {
    fetchInativas();
  }, []);

  return (
    <div>
      <h2>Reativar Salas</h2>
      {salasInativas.length === 0 ? (
        <p>Nenhuma sala inativa.</p>
      ) : (
        <table>
          <thead><tr><th>Nome</th><th>Capacidade</th><th>Ações</th></tr></thead>
          <tbody>
            {salasInativas.map(s => (
              <tr key={s.id}>
                <td>{s.nome}</td><td>{s.capacidade}</td>
                <td><button onClick={() => handleReativar(s.id)}>Reativar</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ReativarSalasPage;
