const express = require('express');
const router = express.Router();
const controller = require('../controllers/salaController');

router.get('/salas', controller.listar);
router.post('/salas', controller.criar);
router.put('/salas/:id', controller.atualizar);
router.patch('/salas/:id/status', controller.atualizarStatus);

module.exports = router;