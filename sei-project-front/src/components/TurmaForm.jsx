import React, { useState, useEffect } from 'react';

const TurmaForm = ({ onSubmit, initialData }) => {
  const [turma, setTurma] = useState({ curso: '', periodo_letivo: '', turno: '', status: 'ATIVO' });
  const [erros, setErros] = useState({});

  useEffect(() => {
    if (initialData) setTurma(initialData);
  }, [initialData]);

  const handleChange = e => {
    const { name, value } = e.target;
    setTurma(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const novosErros = {};
    if (!turma.curso) novosErros.curso = 'Curso é obrigatório';
    if (!turma.periodo_letivo) novosErros.periodo_letivo = 'Período letivo é obrigatório';
    if (!turma.turno) novosErros.turno = 'Turno é obrigatório';

    if (Object.keys(novosErros).length > 0) {
      setErros(novosErros);
      return;
    }

    setErros({});
    onSubmit(turma);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input name="curso" value={turma.curso} onChange={handleChange} placeholder="Curso" required />
        {erros.curso && <span style={{ color: 'red' }}>{erros.curso}</span>}
      </div>
      <div>
        <input name="periodo_letivo" value={turma.periodo_letivo} onChange={handleChange} placeholder="Período Letivo" required />
        {erros.periodo_letivo && <span style={{ color: 'red' }}>{erros.periodo_letivo}</span>}
      </div>
      <div>
        <input name="turno" value={turma.turno} onChange={handleChange} placeholder="Turno" required />
        {erros.turno && <span style={{ color: 'red' }}>{erros.turno}</span>}
      </div>
      <button type="submit">Salvar</button>
    </form>
  );
};

export default TurmaForm;
