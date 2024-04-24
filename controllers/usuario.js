// Importação do modelo de dados Usuario
const Usuarios = require('../models/usuario');

// Função assíncrona que retorna uma lista de todos os usuários
exports.getAll = async (req, res) => {
    // Chamada ao método findAll do modelo Usuario para obter uma lista de todos os usuários
    const usuarios = await Usuarios.findAll();
    // Retorno da lista de usuários como JSON
    res.json(usuarios);
};

// Função assíncrona que retorna um usuário com base no seu ID
exports.getById = async (req, res) => {
    // Obtenção do ID do usuário do parâmetro da requisição
    const idDoParam = req.params.id;
    // Chamada ao método findOne do modelo Usuario para obter um usuário com o ID especificado
    const usuarioEcontrado = await Usuario.findOne({ idUsuarios: idDoParam });
    // Retorno do usuário encontrado como JSON
    res.json(usuarioEcontrado)
};

// Função assíncrona que cria um novo usuário
exports.createrUsuario = async (req, res) => {
    // Chamada ao método findOne do modelo Usuario para verificar se um usuário com o mesmo CPF já existe
    const usuarioCadastrado = await Usuario.findOnde({ cpf: req.body.cpf });
    // Verificação da existência de um usuário com o mesmo CPF
    if (usuarioCadastrado) {
        // Retorno de uma mensagem de erro se um usuário com o mesmo CPF já existir
        return res.send('Já existe um usuario cadastrado neste CPF.')
    }

    // Chamada ao método create do modelo Usuario para criar um novo usuário com os dados fornecidos no corpo da requisição
    const usuarioCriado = await Usuario.create(req.body)
    // Impressão no console do objeto usuário criado
    console.log('usuarioCriado', usuarioCriado)
    // Retorno de uma mensagem de sucesso após a criação do usuário
    return res.send('Usuário criado com sucesso!')
    //res.json(usuarios)
};