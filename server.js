//Imports

const express = require('express');
const { Sequelize } = require('sequelize'); // Importa apenas o Sequelize do pacote
const router = require('./routes/router.js');
require('dotenv').config();

// Autenticando a conexão com o banco de dados e mostrando as tabelas existentes
sequelize.authenticate()
    .then(() => {
        console.log('Conexão com o banco de dados bem-sucedida.');

        // Executando uma consulta SQL para mostrar todas as tabelas do banco de dados
        return sequelize.query("SHOW TABLES");
    })
    .then(([result, metadata]) => {
        console.log('Tabelas no banco de dados:');
        console.log(result);
    })
    .catch(err => {
        console.error('Erro ao conectar ao banco de dados:', err);
    });

// Inicializando o servidor Express
const app = express();

// Middleware para interpretar o corpo das requisições como JSON
app.use(express.json());

// Configurando as rotas
app.use(router);

// Configurando a porta do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Servidor Express online na porta ' + PORT);
});
