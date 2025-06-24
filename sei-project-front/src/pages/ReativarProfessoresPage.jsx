import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const ReativarProfessoresPage = () => {
  const [professoresInativos, setProfessoresInativos] = useState([]);
  const navigate = useNavigate();

  const fetchInativos = async () => {
    try {
      const res = await api.get('/professores?status=INATIVO');
      setProfessoresInativos(res.data);
    } catch (error) {
      console.error('Erro ao buscar professores inativos:', error);
    }
  };

  const handleReativar = async (id) => {
    try {
      await api.patch(`/professores/${id}/status`, { status: 'ATIVO' });
      fetchInativos();
    } catch (error) {
      console.error('Erro ao reativar professor:', error);
    }
  };

  useEffect(() => {
    fetchInativos();
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ color: '#fff' }}>Reativar Professores</h2>
      {professoresInativos.length === 0 ? (
        <p style={{ color: '#fff' }}>Nenhum professor inativo.</p>
      ) : (
        <table className="tabela">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Curso</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {professoresInativos.map((p) => (
              <tr key={p.id}>
                <td>{p.nome}</td>
                <td>{p.curso}</td>
                <td>
                  <div className="botoes-acoes">
                    <button onClick={() => handleReativar(p.id)}>Reativar</button>
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

export default ReativarProfessoresPage;