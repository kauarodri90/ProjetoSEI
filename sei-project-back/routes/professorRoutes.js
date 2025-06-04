const express = require('express');
const router = express.Router();
const controller = require('../controllers/professorController');

router.get('/', controller.listar);
router.post('/', controller.criar);
router.put('/:id', controller.atualizar);
router.patch('/:id/status', controller.atualizarStatus);

module.exports = router;