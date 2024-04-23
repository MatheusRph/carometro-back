// Uma models serve para gerenciar a comunicaçao do back-end com o banco de dados

// models/Usuario.js

// Importa o módulo Sequelize
const Sequelize = require('sequelize');

// Importa a instância do Sequelize configurada no arquivo ../config/sequelize.js
const sequelize = require("../config/sequelize");

// Define o modelo Usuario
const Usuario = sequelize.define('Usuarios', {
  // Define as colunas da tabela
  idusuarios: {
    type: Sequelize.INTEGER,
    primaryKey: true, // Define essa coluna como a chave primária
    autoIncrement: true // Indica que é uma chave primária autoincrementável
  },
  nome: Sequelize.STRING,
  email: Sequelize.STRING,
  cpf: Sequelize.STRING,
  senha: Sequelize.STRING,
  celular: Sequelize.STRING,
  cep: Sequelize.STRING,
  logradouro: Sequelize.STRING,
  bairro: Sequelize.STRING,
  cidade: Sequelize.STRING,
  estado: Sequelize.STRING,
  imagem: Sequelize.STRING,
  Tipos_Usuarios_idTipos_Usuarios: Sequelize.INTEGER
}, {
  // Define que não haverá as colunas createdAt e updatedAt no banco de dados
  timestamps: false // Adiciona colunas createdAt e updatedAt automaticamente
});

module.exports = Usuario;
