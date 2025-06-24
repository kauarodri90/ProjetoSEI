const { DataTypes } = require('sequelize');
const { sequelize } = require('./index');

const Disciplina = sequelize.define('Disciplina', {
  nome: { type: DataTypes.STRING, allowNull: false },
  codigo: { type: DataTypes.STRING, unique: true },
  curso: { type: DataTypes.STRING, allowNull: false },
  periodo: { type: DataTypes.STRING, allowNull: false },
  status: { type: DataTypes.STRING, defaultValue: 'ATIVO' }
});

module.exports = Disciplina;
