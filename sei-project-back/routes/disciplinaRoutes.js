const express = require('express');
const router = express.Router();
const controller = require('../controllers/disciplinaController');

router.get('/disciplinas', controller.listar);
router.post('/disciplinas', controller.criar);
router.put('/disciplinas/:id', controller.atualizar);
router.patch('/disciplinas/:id/status', controller.atualizarStatus);

module.exports = router;