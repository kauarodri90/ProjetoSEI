import React, { useState, useEffect } from 'react';

const AlunoForm = ({ onSubmit, initialData }) => {
  const [aluno, setAluno] = useState({ nome: '', matricula: '', curso: '' });
  const [erros, setErros] = useState({});

  useEffect(() => {
    if (initialData) setAluno(initialData);
  }, [initialData]);

  const handleChange = e => {
    const { name, value } = e.target;
    setAluno(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const novosErros = {};
    if (!aluno.nome) novosErros.nome = 'Nome é obrigatório';
    if (!aluno.matricula) novosErros.matricula = 'Matrícula é obrigatória';
    if (!aluno.curso) novosErros.curso = 'Curso é obrigatório';

    if (Object.keys(novosErros).length > 0) {
      setErros(novosErros);
      return;
    }

    setErros({});
    onSubmit(aluno);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input name="nome" value={aluno.nome} onChange={handleChange} placeholder="Nome do Aluno" required />
        {erros.nome && <span style={{ color: 'red' }}>{erros.nome}</span>}
      </div>
      <div>
        <input name="matricula" value={aluno.matricula} onChange={handleChange} placeholder="Matrícula" required />
        {erros.matricula && <span style={{ color: 'red' }}>{erros.matricula}</span>}
      </div>
      <div>
        <input name="curso" value={aluno.curso} onChange={handleChange} placeholder="Curso" required />
        {erros.curso && <span style={{ color: 'red' }}>{erros.curso}</span>}
      </div>
      <button type="submit">Salvar</button>
    </form>
  );
};

export default AlunoForm;