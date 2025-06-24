  const express = require('express');
  const cors = require('cors');
  const bodyParser = require('body-parser');
  const { sequelize } = require('./models');

  const alunoRoutes = require('./routes/alunoRoutes');
  const disciplinaRoutes = require('./routes/disciplinaRoutes');
  const professorRoutes = require('./routes/professorRoutes');
  const salaRoutes = require('./routes/salaRoutes');
  const turmaRoutes = require('./routes/turmaRoutes');
  const cursoRoutes = require('./routes/cursosRoutes');

  const app = express();
  app.use(cors());
  app.use(bodyParser.json());

  app.use('/api/alunos', alunoRoutes);
  app.use('/api/disciplinas', disciplinaRoutes);
  app.use('/api/professores', professorRoutes);
  app.use('/api/salas', salaRoutes);
  app.use('/api/turmas', turmaRoutes);
  app.use('/api/cursos', cursoRoutes);


  const PORT = process.env.PORT || 3000;
  sequelize.sync().then(() => {
    app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
  });