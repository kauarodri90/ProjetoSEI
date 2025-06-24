import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const SalaPage = () => {
  const [salas, setSalas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    carregarSalas();
  }, []);

  const carregarSalas = async () => {
    try {
      const response = await api.get('/salas');
      setSalas(response.data);
    } catch (error) {
      console.error('Erro ao carregar salas:', error);
    }
  };

  const handleExcluir = async (id) => {
    await api.patch(`/salas/${id}/status`, { status: 'INATIVO' });
    carregarSalas();
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ color: '#fff' }}>Gerenciar Salas</h2>

      <button
        onClick={() => navigate('/salas/novo')}
        className="centered-button"
      >
        Incluir Nova Sala
      </button>

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
          {salas.map((sala) => (
            <tr key={sala.id}>
              <td>{sala.nome}</td>
              <td>{sala.capacidade}</td>
              <td>{sala.local}</td>
              <td>
                <div className="botoes-acoes">
                  <button onClick={() => navigate(`/salas/editar/${sala.id}`)}>Editar</button>
                  <button onClick={() => handleExcluir(sala.id)}>Excluir</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalaPage;