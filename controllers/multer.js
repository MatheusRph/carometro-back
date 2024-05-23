// controllers/multer.js
const path = require('path');

exports.uploadFile = (req, res) => {
    if (!req.file) {
        return res.status(400).send('Nenhum arquivo enviado ou o nome do campo do formulário está incorreto.');
    }

    const filePath = path.join('/uploads', req.file.filename); // Caminho relativo para o cliente
    res.json({ message: 'Arquivo enviado com sucesso!', filePath: filePath });
};
