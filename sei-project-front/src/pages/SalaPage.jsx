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
    const response = await api.get('/salas');
    setSalas(response.data);
  };

  const handleExcluir = async (id) => {
    await api.patch(`/salas/${id}/status`, { status: 'INATIVO' });
    carregarSalas();
  };

  return (
    <div>
      <h2>Gerenciar Salas</h2>
      <button onClick={() => navigate('/salas/novo')}>Incluir Nova Sala</button>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Capacidade</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {salas.map((sala) => (
            <tr key={sala.id}>
              <td>{sala.nome}</td>
              <td>{sala.capacidade}</td>
              <td>
                <button onClick={() => navigate(`/salas/editar/${sala.id}`)}>Editar</button>
                <button onClick={() => handleExcluir(sala.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalaPage;