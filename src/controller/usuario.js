const { cadastrarUsuario } = require('../repository/usuario');

function cadastro(req, res, next) {
    const dadosUsuarios = req.body;

    return cadastrarUsuario(dadosUsuarios)
        .then(usuario => {
            if (!usuario) {
                return res.status(409).end();
            }

            return res.status(200).end();
        })
        .catch(error => next(error));
}

module.exports = { cadastro };