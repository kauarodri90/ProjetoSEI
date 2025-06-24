const { DataTypes } = require('sequelize');
const { sequelize } = require('./index');

const Turma = sequelize.define('Turma', {
  curso: { type: DataTypes.STRING, allowNull: false },
  periodo_letivo: { type: DataTypes.STRING, allowNull: false },
  turno: { type: DataTypes.STRING, allowNull: false },
  horario_inicio: { type: DataTypes.TIME, allowNull: false },
  horario_fim: { type: DataTypes.TIME, allowNull: false },
  status: { type: DataTypes.STRING, defaultValue: 'ATIVO' }
});

module.exports = Turma;