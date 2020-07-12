const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const LinguagemSchema = new mongoose.Schema({
    nome: String,
    criadoPor: String,
    surgidoEm: Number,
    ultimaVersao: Number,
    usuarios: [ObjectId],
    paradigmas: [String],
    urlImagem: String
}, { collection: 'linguagens' });

module.exports = mongoose.model('Linguagem', LinguagemSchema);