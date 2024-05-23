    // multer.js
    const multer = require('multer');
    const path = require('path');
    const crypto = require('crypto');

    // Função para gerar um nome de arquivo único
    const generateUniqueFilename = (originalName) => {
        const ext = path.extname(originalName);
        const name = path.basename(originalName, ext);
        const uniqueSuffix = crypto.randomBytes(8).toString('hex');
        return `${name}-${uniqueSuffix}${ext}`;
    };

    // Configuração do multer para armazenar os uploads no diretório especificado
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.join(__dirname, '../images')); // Caminho relativo usando __dirname
        },
        filename: (req, file, cb) => {
            cb(null, generateUniqueFilename(file.originalname));
        }
    });

    // Filtro para aceitar apenas arquivos de imagem
    const imageFileFilter = (req, file, cb) => {
        const allowedTypes = /jpeg|jpg|png|gif/;
        const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = allowedTypes.test(file.mimetype);

        if (extname && mimetype) {
            return cb(null, true);
        } else {
            cb(new Error('Apenas arquivos de imagem são permitidos.'));
        }
    };

    const upload = multer({
        storage: storage,
        limits: { fileSize: 10 * 1024 * 1024 }, // Limite de tamanho do arquivo (10 MB)
        fileFilter: imageFileFilter
    });

    module.exports = upload;
