const express = require('express');
const router = express.Router();
const controller = require('../controllers/alunoController');

router.get('/alunos', controller.listar);
router.post('/alunos', controller.criar);
router.put('/alunos/:id', controller.atualizar);
router.patch('/alunos/:id/status', controller.atualizarStatus);

module.exports = router;