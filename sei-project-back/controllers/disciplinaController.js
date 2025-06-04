const Disciplina = require('../models/disciplina');

exports.listar = async (req, res) => {
  const where = {};
  if (req.query.nome) where.nome = req.query.nome;
  if (req.query.codigo) where.codigo = req.query.codigo;
  if (req.query.curso) where.curso = req.query.curso;
  const disciplinas = await Disciplina.findAll({ where });
  res.json(disciplinas);
};

exports.criar = async (req, res) => {
  const disciplina = await Disciplina.create(req.body);
  res.json(disciplina);
};

exports.atualizar = async (req, res) => {
  await Disciplina.update(req.body, { where: { id: req.params.id } });
  res.json({ sucesso: true });
};

exports.atualizarStatus = async (req, res) => {
  await Disciplina.update({ status: req.body.status }, { where: { id: req.params.id } });
  res.json({ sucesso: true });
};