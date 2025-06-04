module.exports = (sequelize, DataTypes) => {
    const Curso = sequelize.define('Curso', {
      nome: DataTypes.STRING,
    });
    return Curso;
  };