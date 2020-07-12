const
    enviroment = process.env.ENV || 'development',
    { sign, verify } = require('jsonwebtoken'),
    { randomBytes, pbkdf2Sync } = require('crypto');

const { secret } = require('../config/config')[enviroment];

/**
 * Gera um token a partir das informações do parametro
 * @param {string} id id do usuario
 * @param {string} email email do usuario
 * @param {string} nome nome do usuario
 * @returns {string} token gerado
 */
function gerarJWT(id, email, nome) {
    // Token expira em um dia.
    const exp = new Date()
    const token = sign({ id, email, nome, exp }, secret, { expiresIn: 86400 });
    return { token };
}

/**
 * 
 * @param {string} senha 
 * @returns { {string, string} } { salt, hash } 
 */
function gerarCredenciais(senha) {
    const salt = randomBytes(16).toString('hex');
    const hash = pbkdf2Sync(senha, salt, 1000, 512, 'sha512').toString('hex');

    return { salt, hash };
}

function senhaConfere(senha, cadastro) {
    return (cadastro.hash === pbkdf2Sync(senha, cadastro.salt, 1000, 512, 'sha512').toString('hex'));
}

/**
 * 
 * @param {string} senha 
 * @param {Function} callback 
 * @returns {boolean}
 */
function verificarToken(token, callback) {
    return verify(token, secret, callback);
}

module.exports = { gerarJWT, gerarCredenciais, senhaConfere, verificarToken };