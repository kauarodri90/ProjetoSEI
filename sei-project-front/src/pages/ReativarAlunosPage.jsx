import React, { useEffect, useState } from 'react';
import api from '../services/api';

const ReativarAlunosPage = () => {
  const [inativos, setInativos] = useState([]);

  const fetchInativos = async () => {
    const res = await api.get('/alunos');
    setInativos(res.data.filter(a => !a.ativo));
  };

  const handleReativar = async (id) => {
    await api.patch(`/alunos/${id}/status`, { ativo: true });
    fetchInativos();
  };

  useEffect(() => { fetchInativos(); }, []);

  return (
    <div>
      <h2>Reativar Alunos</h2>
      {inativos.length === 0 ? <p>Nenhum aluno inativo.</p> : (
        <table>
          <thead><tr><th>Nome</th><th>Matrícula</th><th>Ações</th></tr></thead>
          <tbody>
            {inativos.map(a => (
              <tr key={a.id}>
                <td>{a.nome}</td><td>{a.matricula}</td>
                <td><button onClick={() => handleReativar(a.id)}>Reativar</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ReativarAlunosPage;