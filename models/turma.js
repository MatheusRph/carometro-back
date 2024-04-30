// Importação do módulo Sequelize e inicialização da conexão com o banco de dados
const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');

const Turma = sequelize.define('Turmas', {
    idTurmas: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }, 
    codigo: Sequelize.STRING,
    descricao: Sequelize.STRING,
    inicio: Sequelize.DATE,
    fim: Sequelize.DATE,
    fotos: {
        type: Sequelize.STRING,
        defaultValue: 'default.jpg' // Define um valor padrão
    }
}, {
    timestamps: false
});



module.exports = Turma;
