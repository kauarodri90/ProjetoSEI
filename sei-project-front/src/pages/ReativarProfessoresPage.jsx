import React, { useEffect, useState } from 'react';
import api from '../services/api';

const ReativarProfessoresPage = () => {
  const [professoresInativos, setProfessoresInativos] = useState([]);

  const fetchInativos = async () => {
    const res = await api.get('/professores');
    const filtrados = res.data.filter(p => p.status === 'INATIVO');
    setProfessoresInativos(filtrados);
  };

  const handleReativar = async (id) => {
    await api.patch(`/professores/${id}/status`, { status: 'ATIVO' });
    fetchInativos();
  };

  useEffect(() => {
    fetchInativos();
  }, []);

  return (
    <div>
      <h2>Reativar Professores</h2>
      {professoresInativos.length === 0 ? (
        <p>Nenhum professor inativo.</p>
      ) : (
        <table>
          <thead>
            <tr><th>Nome</th><th>Curso</th><th>Ações</th></tr>
          </thead>
          <tbody>
            {professoresInativos.map(p => (
              <tr key={p.id}>
                <td>{p.nome}</td>
                <td>{p.curso}</td>
                <td>
                  <button onClick={() => handleReativar(p.id)}>Reativar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ReativarProfessoresPage;
