const { DataTypes } = require('sequelize');
const { sequelize } = require('./index');

const Professor = sequelize.define('Professor', {
  nome: { type: DataTypes.STRING, allowNull: false },
  cpf: { type: DataTypes.STRING, unique: true },
  data_nascimento: { type: DataTypes.DATEONLY, allowNull: false },
  curso: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING },
  status: { type: DataTypes.STRING, defaultValue: 'ATIVO' }
});

module.exports = Professor;
