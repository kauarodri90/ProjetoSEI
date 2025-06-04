const Turma = require('../models/turma');

exports.listar = async (req, res) => {
  const where = {};
  if (req.query.curso) where.curso = req.query.curso;
  if (req.query.periodo_letivo) where.periodo_letivo = req.query.periodo_letivo;
  if (req.query.turno) where.turno = req.query.turno;
  const turmas = await Turma.findAll({ where });
  res.json(turmas);
};

exports.criar = async (req, res) => {
  const turma = await Turma.create(req.body);
  res.json(turma);
};

exports.atualizar = async (req, res) => {
  await Turma.update(req.body, { where: { id: req.params.id } });
  res.json({ sucesso: true });
};

exports.atualizarStatus = async (req, res) => {
  await Turma.update({ status: req.body.status }, { where: { id: req.params.id } });
  res.json({ sucesso: true });
};