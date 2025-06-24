import React, { useState, useEffect } from 'react';

const DisciplinaForm = ({ onSubmit, initialData }) => {
  const [disciplina, setDisciplina] = useState({ nome: '', codigo: '', curso: '', periodo: '', status: 'ATIVO' });
  const [erros, setErros] = useState({});

  useEffect(() => {
    if (initialData) setDisciplina(initialData);
  }, [initialData]);

  const handleChange = e => {
    const { name, value } = e.target;
    setDisciplina(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const novosErros = {};
    if (!disciplina.nome) novosErros.nome = 'Nome é obrigatório';
    if (!disciplina.codigo) novosErros.codigo = 'Código é obrigatório';
    else if (disciplina.codigo.length > 15) novosErros.codigo = 'Máximo de 10 caracteres';
    if (!disciplina.curso) novosErros.curso = 'Curso é obrigatório';

    if (Object.keys(novosErros).length > 0) {
      setErros(novosErros);
      return;
    }

    setErros({});
    onSubmit(disciplina);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input name="nome" value={disciplina.nome} onChange={handleChange} placeholder="Nome da Disciplina" required />
        {erros.nome && <span style={{ color: 'red' }}>{erros.nome}</span>}
      </div>
      <div>
        <input name="codigo" value={disciplina.codigo} onChange={handleChange} placeholder="Código" maxLength={10} required />
        {erros.codigo && <span style={{ color: 'red' }}>{erros.codigo}</span>}
      </div>
      <div>
        <input name="curso" value={disciplina.curso} onChange={handleChange} placeholder="Curso" required />
        {erros.curso && <span style={{ color: 'red' }}>{erros.curso}</span>}
      </div>
      <div>
        <input name="periodo" value={disciplina.periodo || ''} onChange={handleChange} placeholder="Período" required />
        {erros.periodo && <span style={{ color: 'red' }}>{erros.periodo}</span>}
      </div>
      <button type="submit">Salvar</button>
    </form>
  );
};

export default DisciplinaForm;
