import React, { useState, useEffect } from 'react';

const validarCPF = (cpf) => {
  const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  return regex.test(cpf);
};

const ProfessorForm = ({ onSubmit, initialData }) => {
  const [professor, setProfessor] = useState({
    nome: '',
    cpf: '',
    data_nascimento: '',
    curso: '',
    email: '',
    status: 'ATIVO',
  });

  const [erros, setErros] = useState({});

  useEffect(() => {
    if (initialData) setProfessor(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfessor((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const novosErros = {};

    if (!professor.nome || professor.nome.length > 100) {
      novosErros.nome = 'Nome é obrigatório e deve ter até 100 caracteres';
    }

    if (!validarCPF(professor.cpf)) {
      novosErros.cpf = 'CPF inválido. Use o formato 000.000.000-00';
    }

    if (!professor.curso || professor.curso.length > 50) {
      novosErros.curso = 'Curso é obrigatório e deve ter até 50 caracteres';
    }

    if (professor.email && professor.email.length > 100) {
      novosErros.email = 'E-mail deve ter até 100 caracteres';
    }

    if (Object.keys(novosErros).length > 0) {
      setErros(novosErros);
      return;
    }

    setErros({});
    onSubmit(professor);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          name="nome"
          maxLength={100}
          value={professor.nome}
          onChange={handleChange}
          placeholder="Nome"
          required
        />
        {erros.nome && <span style={{ color: 'red' }}>{erros.nome}</span>}
      </div>

      <div>
        <input
          name="cpf"
          value={professor.cpf}
          onChange={handleChange}
          placeholder="CPF (000.000.000-00)"
          maxLength={14}
          required
        />
        {erros.cpf && <span style={{ color: 'red' }}>{erros.cpf}</span>}
      </div>

      <div>
        <input
          type="date"
          name="data_nascimento"
          value={professor.data_nascimento}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <input
          name="curso"
          maxLength={50}
          value={professor.curso}
          onChange={handleChange}
          placeholder="Curso"
          required
        />
        {erros.curso && <span style={{ color: 'red' }}>{erros.curso}</span>}
      </div>

      <div>
        <input
          name="email"
          maxLength={100}
          value={professor.email}
          onChange={handleChange}
          placeholder="Email"
        />
        {erros.email && <span style={{ color: 'red' }}>{erros.email}</span>}
      </div>

      <button type="submit">Salvar</button>
    </form>
  );
};

export default ProfessorForm;
