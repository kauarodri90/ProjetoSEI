const { DataTypes } = require('sequelize');
const { sequelize } = require('./index');

const Aluno = sequelize.define('Aluno', {
  nome: { type: DataTypes.STRING, allowNull: false },
  matricula: { type: DataTypes.STRING, unique: true },
  curso: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING },
  ativo: { type: DataTypes.BOOLEAN, defaultValue: true }
});

module.exports = Aluno;