const Aluno = require('../models/aluno');

exports.listar = async (req, res) => {
  const where = {};
  if (req.query.nome) where.nome = req.query.nome;
  if (req.query.matricula) where.matricula = req.query.matricula;
  if (req.query.curso) where.curso = req.query.curso;
  const alunos = await Aluno.findAll({ where });
  res.json(alunos);
};

exports.criar = async (req, res) => {
  const aluno = await Aluno.create(req.body);
  res.json(aluno);
};

exports.atualizar = async (req, res) => {
  await Aluno.update(req.body, { where: { id: req.params.id } });
  res.json({ sucesso: true });
};

exports.atualizarStatus = async (req, res) => {
  await Aluno.update({ ativo: req.body.ativo }, { where: { id: req.params.id } });
  res.json({ sucesso: true });
};