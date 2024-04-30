const { where } = require('sequelize');
const Turma = require('../models/turma'); // Alterado de Usuarios para Turma
const Usuario = require('../models/usuario');

exports.getAll = async (req, res) => {
    // Chamada ao método findAll do modelo Turma para obter uma lista de todas as turmas
    const turmas = await Turma.findAll(); // Alterado de Usuarios para Turma
    // Retorno da lista de turmas como JSON
    res.json(turmas);
};

exports.createTurma = async (req, res) => {
    try {
        if (!req.body.codigo) {
            return res.status(400).send('O código é obrigatório');
        }

        const turmaCadastrada = await Turma.findOne({ where: { codigo: req.body.codigo } });

        if (turmaCadastrada) {
            return res.send('Turma já cadastrada!');
        }

        const turmaCriada = await Turma.create(req.body);

        console.log('turmaCriada', turmaCriada);
        
        // Retorno de uma mensagem de sucesso após a criação da turma
        return res.send('Turma criada com sucesso!');
        
    } catch (error) {
        console.error('Erro ao criar turma:', error);
        // Retorno de uma mensagem de erro em caso de falha na criação da turma
        return res.status(500).send('Erro ao criar turma. Por favor, tente novamente.');
    }
};
