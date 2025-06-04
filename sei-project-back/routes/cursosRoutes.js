const express = require('express');
const router = express.Router();
const { Curso } = require('../models');

router.get('/', async (req, res) => {
  try {
    const cursos = await Curso.findAll();
    res.json(cursos);
  } catch (err) {
    console.error('Erro ao buscar cursos:', err);
    res.status(500).json({ error: 'Erro ao buscar cursos' });
  }
});

module.exports = router;