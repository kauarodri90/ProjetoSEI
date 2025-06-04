const { DataTypes } = require('sequelize');
const { sequelize } = require('./index');

const Sala = sequelize.define('Sala', {
    nome: { type: DataTypes.STRING, allowNull: false, unique: true },
    capacidade: { type: DataTypes.INTEGER, allowNull: false },
    status: { type: DataTypes.STRING, defaultValue: 'ATIVO' }
  });
  
  module.exports = Sala;