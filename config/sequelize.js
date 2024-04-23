// Iniciando o sequelize
// Importa o Sequelize
const Sequelize = require("sequelize")

// Importa as configurações do banco de dados do arquivo database.js
const databaseConfig = require("./database.js")

// Cria uma nova instância do Sequelize com as configurações específicas do ambiente de desenvolvimento
const sequelize = new Sequelize(databaseConfig.development)

// Exporta a instância do Sequelize para ser usada em outros arquivos
module.exports = sequelize;
