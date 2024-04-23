// Controller do usuários

// Importa o modelo de usuário
const Usuario = require('../models/usuario.js');

// Função para obter todos os usuários
exports.getAll = async (req, res) => {
    // Aguarda a busca por todos os usuários no banco de dados
    const usuarios = await Usuario.findAll();
    // Retorna os usuários encontrados como JSON
    res.json(usuarios);
};

// Função para obter um usuário por ID
exports.getById = async (req, res) => {
    // Obtém o ID do parâmetro da requisição
    const idDoParam = req.params.id;
    // Procura um usuário com o ID especificado no banco de dados
    const usuarioEncontrado = await Usuario.findOne({ idUsuarios: idDoParam });
    // Retorna o usuário encontrado como JSON
    res.json(usuarioEncontrado);
};

// Função para criar um usuário
exports.createUsuario = async (req, res) => {
    // Verifica se já existe um usuário cadastrado com o CPF fornecido
    const usuarioCadastrado = await Usuario.findOne({ cpf: req.body.cpf });
    // Se já existir, retorna uma mensagem de erro
    if (usuarioCadastrado) {
        return res.send('CPF já cadastrado!!');
    } else {
        // Se não existir, cria um novo usuário com os dados fornecidos no corpo da requisição
        const usuarioCriado = await Usuario.create(req.body);
        // Registra a criação do usuário no console
        console.log("usuarioCriado", usuarioCriado);
        // Retorna uma mensagem de sucesso
        return res.send('Usuário foi cadastrado!');
    }
};
