const Professor = require('../models/professor');
exports.listar = async (req, res) => {
  const where = {};
  if (req.query.nome) where.nome = req.query.nome;
  where.status = req.query.status || 'ATIVO';
  const dados = await Professor.findAll({ where });
  res.json(dados);
};
exports.criar = async (req, res) => { const p = await Professor.create(req.body); res.json(p); };
exports.atualizar = async (req, res) => { await Professor.update(req.body, { where: { id: req.params.id } }); res.json({ sucesso: true }); };
exports.atualizarStatus = async (req, res) => { await Professor.update({ status: req.body.status }, { where: { id: req.params.id } }); res.json({ sucesso: true }); };
