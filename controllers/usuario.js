// Importação do modelo de dados Usuario
const Usuario = require('../models/usuario'); // Alterado de Usuarios para Usuario

// Função assíncrona que retorna uma lista de todos os usuários
exports.getAll = async (req, res) => {
    // Chamada ao método findAll do modelo Usuario para obter uma lista de todos os usuários
    const usuarios = await Usuario.findAll(); // Alterado de Usuarios para Usuario
    // Retorno da lista de usuários como JSON
    res.json(usuarios);
};

// Função assíncrona que retorna um usuário com base no seu ID
exports.getById = async (req, res) => {
    // Obtenção do ID do usuário do parâmetro da requisição
    const idDoParam = req.params.id;
    // Chamada ao método findOne do modelo Usuario para obter um usuário com o ID especificado
    const usuarioEcontrado = await Usuario.findOne({ idUsuarios: idDoParam }); // Alterado de Usuarios para Usuario
    // Retorno do usuário encontrado como JSON
    res.json(usuarioEcontrado);
};

// Função assíncrona que cria um novo usuário
exports.createrUsuario = async (req, res) => {
    try {
        // Verifica se o CPF está presente no corpo da requisição
        if (!req.body.cpf) {
            return res.status(400).send('O CPF é obrigatório.');
        }


        // Chamada ao método findOne do modelo Usuario para verificar se um usuário com o mesmo CPF já existe
        const usuarioCadastrado = await Usuario.findOne({ where: { cpf: req.body.cpf } });
        
        // Verificação da existência de um usuário com o mesmo CPF
        if (usuarioCadastrado) {
            // Retorno de uma mensagem de erro se um usuário com o mesmo CPF já existir
            return res.send('Já existe um usuário cadastrado neste CPF.');
        }

        // Chamada ao método create do modelo Usuario para criar um novo usuário com os dados fornecidos no corpo da requisição
        const usuarioCriado = await Usuario.create(req.body);
        
        // Impressão no console do objeto usuário criado
        console.log('usuarioCriado', usuarioCriado);
        
        // Verificação para obtenção de usuário
        const tipoUsuario = req.body.Tipos_Usuarios_idTipos_Usuarios

        if (tipoUsuario == 1) {
            return res.send('Usuário cadastrado como aluno!');
        } else if (tipoUsuario == 2) {
            return res.send('Usuário cadastrado como professor!');
        }

        
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
        // Retorno de uma mensagem de erro em caso de falha na criação do usuário
        return res.status(500).send('Erro ao criar usuário. Por favor, tente novamente.');
    }
};