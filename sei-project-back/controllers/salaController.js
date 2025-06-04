const Sala = require('../models/sala');

exports.listar = async (req, res) => {
  const where = {};
  if (req.query.nome) where.nome = req.query.nome;
  const salas = await Sala.findAll({ where });
  res.json(salas);
};

exports.criar = async (req, res) => {
  const sala = await Sala.create(req.body);
  res.json(sala);
};

exports.atualizar = async (req, res) => {
  await Sala.update(req.body, { where: { id: req.params.id } });
  res.json({ sucesso: true });
};

exports.atualizarStatus = async (req, res) => {
  await Sala.update({ status: req.body.status }, { where: { id: req.params.id } });
  res.json({ sucesso: true });
};