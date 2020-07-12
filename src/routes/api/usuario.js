const Router = require('express').Router();

const { validarUsuario, validarSenha } = require('../../middleware/validacao'),
    controller = require('../../controller/usuario');

Router.use(validarUsuario);
Router.post('/', validarSenha, controller.cadastro);

module.exports = Router;