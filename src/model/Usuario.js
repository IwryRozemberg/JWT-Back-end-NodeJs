const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
    nome: String,
    email: String,
    hash: String,
    salt: String
}, { collection: 'usuarios' });

module.exports = mongoose.model('Usuario', UsuarioSchema);