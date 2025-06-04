const express = require('express');
const router = express.Router();
const controller = require('../controllers/turmaController');

router.get('/turmas', controller.listar);
router.post('/turmas', controller.criar);
router.put('/turmas/:id', controller.atualizar);
router.patch('/turmas/:id/status', controller.atualizarStatus);

module.exports = router;