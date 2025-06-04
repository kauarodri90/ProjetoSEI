import React, { useEffect, useState } from 'react';
import api from '../services/api';

const ReativarDisciplinasPage = () => {
  const [disciplinasInativas, setDisciplinasInativas] = useState([]);

  const fetchInativas = async () => {
    const res = await api.get('/disciplinas');
    const filtradas = res.data.filter(d => d.status === 'INATIVO');
    setDisciplinasInativas(filtradas);
  };

  const handleReativar = async (id) => {
    await api.patch(`/disciplinas/${id}/status`, { status: 'ATIVO' });
    fetchInativas();
  };

  useEffect(() => {
    fetchInativas();
  }, []);

  return (
    <div>
      <h2>Reativar Disciplinas</h2>
      {disciplinasInativas.length === 0 ? (
        <p>Nenhuma disciplina inativa.</p>
      ) : (
        <table>
          <thead><tr><th>Nome</th><th>Curso</th><th>Ações</th></tr></thead>
          <tbody>
            {disciplinasInativas.map(d => (
              <tr key={d.id}>
                <td>{d.nome}</td><td>{d.curso}</td>
                <td><button onClick={() => handleReativar(d.id)}>Reativar</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ReativarDisciplinasPage;
