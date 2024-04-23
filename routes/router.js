const express = require("express");
const router = express.Router(); // Cria um novo objeto de roteador do Express
const usuarioController = require('../controllers/usuario.js'); // Importa o controlador de usuário

// Rota para obter todos os usuários
router.get('/usuario', usuarioController.getAll);

// Rota para obter um usuário por ID
router.get('/usuario/:id', usuarioController.getById);

// Rota para criar um novo usuário
router.post('/usuario', usuarioController.createUsuario);

module.exports = router; // Exporta o roteador para uso em outros arquivos
