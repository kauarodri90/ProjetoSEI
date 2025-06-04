import React, { useState, useEffect } from 'react';

const SalaForm = ({ onSubmit, initialData }) => {
  const [sala, setSala] = useState({ nome: '', capacidade: '', status: 'ATIVO' });
  const [erros, setErros] = useState({});

  useEffect(() => {
    if (initialData) setSala(initialData);
  }, [initialData]);

  const handleChange = e => {
    const { name, value } = e.target;
    setSala(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const novosErros = {};
    if (!sala.nome) novosErros.nome = 'Nome é obrigatório';
    if (!sala.capacidade || sala.capacidade <= 0) novosErros.capacidade = 'Capacidade deve ser um número positivo';

    if (Object.keys(novosErros).length > 0) {
      setErros(novosErros);
      return;
    }

    setErros({});
    onSubmit(sala);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input name="nome" value={sala.nome} onChange={handleChange} placeholder="Nome da Sala" required />
        {erros.nome && <span style={{ color: 'red' }}>{erros.nome}</span>}
      </div>
      <div>
        <input
          type="number"
          name="capacidade"
          value={sala.capacidade}
          onChange={handleChange}
          placeholder="Capacidade"
          required
        />
        {erros.capacidade && <span style={{ color: 'red' }}>{erros.capacidade}</span>}
      </div>
      <button type="submit">Salvar</button>
    </form>
  );
};

export default SalaForm;
