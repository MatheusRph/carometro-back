// Importação do módulo Sequelize e inicialização da conexão com o banco de dados
const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');

const UsuariosTurmas = sequelize.define('usuarios_turmas', {
    Usuarios_idUsuarios: {
        type: Sequelize.INTEGER,
        primaryKey: true, // Definindo como chave primária
    },
    Turmas_idTurmas: {
        type: Sequelize.INTEGER,
        primaryKey: true, // Definindo como chave primária
    }
}, {
    timestamps: false
});

module.exports = UsuariosTurmas;
