const Aluno = require('../models/aluno');

exports.listar = async (req, res) => {
  try {
    const where = {};
    if (req.query.nome) where.nome = req.query.nome;
    if (req.query.matricula) where.matricula = req.query.matricula;
    if (req.query.curso) where.curso = req.query.curso;
    if (req.query.status !== undefined){
      where.ativo = req.query.status;
    } else {
      where.ativo = true;
    }

    const alunos = await Aluno.findAll({ where });
    res.json(alunos);
  } catch (error) {
    console.error('Erro ao listar alunos:', error);
    res.status(500).json({ erro: 'Erro ao listar alunos', detalhes: error.message });
  }
};

exports.criar = async (req, res) => {
  try {
    const aluno = await Aluno.create(req.body);
    res.json(aluno);
  } catch (error) {
    console.error('Erro ao criar aluno:', error);
    res.status(500).json({ erro: 'Erro ao criar aluno', detalhes: error.message });
  }
};

exports.atualizar = async (req, res) => {
  try {
    await Aluno.update(req.body, { where: { id: req.params.id } });
    res.json({ sucesso: true });
  } catch (error) {
    console.error('Erro ao atualizar aluno:', error);
    res.status(500).json({ erro: 'Erro ao atualizar aluno', detalhes: error.message });
  }
};

exports.atualizarStatus = async (req, res) => {
  try {
    await Aluno.update({ ativo: req.body.ativo }, { where: { id: req.params.id } });
    res.json({ sucesso: true });
  } catch (error) {
    console.error('Erro ao atualizar status do aluno:', error);
    res.status(500).json({ erro: 'Erro ao atualizar status', detalhes: error.message });
  }
};
