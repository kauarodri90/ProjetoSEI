import React, { useState, useEffect } from 'react';

export default function SalaForm({ onSubmit, initialData }) {
  const [sala, setSala] = useState({
    nome: '',
    capacidade: '',
    local: '',
  });

  useEffect(() => {
    if (initialData) setSala(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSala((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(sala);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome da Sala:</label>
        <input
          type="text"
          name="nome"
          value={sala.nome}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Capacidade:</label>
        <input
          type="number"
          name="capacidade"
          value={sala.capacidade}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Local:</label>
        <input
          type="text"
          name="local"
          value={sala.local}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">Salvar</button>
    </form>
  );
}