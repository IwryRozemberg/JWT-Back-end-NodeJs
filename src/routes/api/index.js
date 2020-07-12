const Router = require('express').Router();

const
    usuariosRouter = require('./usuario'),
    linguagemRouter = require('./linguagem'),
    authRouter = require('./auth');

const endpoints = {
    message: 'WEB Api - Liguagem',
    endpoints: {
        usuarios: {
            caminho: '/usuarios'
        },
        linguagens: {
            caminho: '/linguagens'
        },
        autenticacao: {
            caminho: '/auth'
        }
    }
}

Router.get('/', (req, res, next) => res.json(endpoints));
Router.use('/usuarios', usuariosRouter);
Router.use('/linguagens', linguagemRouter);
Router.use('/auth', authRouter);

module.exports = Router;