const { validate } = require('email-validator'),
    passwordValidator = require('password-validator');

function validarUsuario(req, res, next) {
    const usuario = req.body;
    const { email, senha } = usuario;

    if (!email || !senha) {
        return res.status(400).end();
    }

    if (!validate(email)) {
        return res.status(400).end();
    }

    return next();
}

function validarSenha(req, res, next) {
    const { senha } = req.body;
    const schemaValidacao = new passwordValidator();

    schemaValidacao
        .is().min(3)
        .has().not().spaces();

    // schemaValidacao
    //     .is().min(8)
    //     .has().lowercase()
    //     .has().digits()
    //     .has().digits()
    //     .has().not().spaces();

    if (!schemaValidacao.validate(senha)) {
        return res.status(400).end()
    }

    return next();
}

module.exports = { validarUsuario, validarSenha };