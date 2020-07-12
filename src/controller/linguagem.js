const { curtirLinguagem, listarLinguagens, detalhesLinguagem } = require('../repository/linguagem');

const listar = (req, res, next) => {
    const idUsuario = res.locals.payload.id;

    return listarLinguagens(idUsuario)
        .then(linguagens => res.json(linguagens))
        .catch(err => next(err));
};

const curtir = (req, res, next) => {
    const idLinguagem = req.params.id;
    const idUsuario = res.locals.payload.id;

    return curtirLinguagem(idLinguagem, idUsuario)
        .then(disponivel => {
            if (!disponivel) {
                return res.status(409).end();
            }
            return res.end(); //.status(200).
        })
        .catch(err => next(err));
}

const detalhar = (req, res, next) => {
    const idLinguagem = req.params.id;

    return detalhesLinguagem(idLinguagem)
        .then(linguagem => res.json(linguagem))
        .catch(err => next(err));
};

module.exports = { listar, curtir, detalhar };