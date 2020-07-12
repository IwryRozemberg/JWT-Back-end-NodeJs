const
    BlackList = require('../model/BlackList'),
    Usuario = require('../model/Usuario'),
    { gerarJWT, senhaConfere } = require('../service/auth');


function login(email, senha) {
    return Usuario.findOne({ email })
        .then(cadastrado => {
            if (cadastrado && senhaConfere(senha, cadastrado)) {
                return gerarJWT(cadastrado.id, cadastrado.email, cadastrado.nome);
            }

            return false;
        });
}

function logout(token) {
    return BlackList.find({ token })
        .then(listado => {
            if (!listado.length) {
                const listedToken = new BlackList({ token });
                listedToken.save();
            }
        })
}

function checarToken(token) {
    return BlackList.find({ token }).then(listado => listado.length > 0);
}

module.exports = { login, logout, checarToken };