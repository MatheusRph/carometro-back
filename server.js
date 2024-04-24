// Importando o módulo do express
const express = require('express');
const sequelize = require('./config/sequelize');
const router = require('./routes/router');
require('dotenv').config();

// Testando a conexão com o banco de dados
sequelize.authenticate()
    .then(() => {
        console.log('Conexão com o banco de dados bem-sucedida.');

        // Listando todas as tabelas do banco de dados
        return sequelize.query('SHOW TABLES');
    })
    .then(([result, metadata]) => {
        console.log('Tabelas no banco de dados:');
        console.log(result);

        // Iniciando o servidor
        /*app.listen(3000, () => {
            console.log('Servidor Express iniciado na porta 3000');
        }); */
    })
    .catch(err => {
        console.error('Falha ao conectar ao banco de dados:', err);
    });

// Criando uma instância do express
const app = express();

// Definindo o middleware para aceitar dados no formato JSON
app.use(express.json());
app.use(router);

// Definindo a porta em que o servidor irá ouvir
const PORT = process.env.PORT || 3000;

// Iniciando o servidor e ouvindo a porta especificada
app.listen(PORT, () => {
    console.log(`Servidor Express iniciado!\x1b[36;5;4mhttp://localhost:${PORT}\x1b[0m`);
});
