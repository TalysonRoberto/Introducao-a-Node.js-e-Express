const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/UsuariosController.js');

// CRUD USUÁRIO
router.get('/usuarios', usuarioController.lista);
router.get('/usuarios/:id', usuarioController.consultarPorId);
router.post('/usuarios', usuarioController.criar);
router.put('/usuarios/:id', usuarioController.atualizar);
router.delete('/usuarios/:id', usuarioController.deletar);

module.exports = router;