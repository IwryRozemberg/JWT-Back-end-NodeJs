const Router = require('express').Router();

const { autenticarRequisicao } = require('../../middleware/auth'),
    controller = require('../../controller/linguagem');

Router.get('/', autenticarRequisicao, controller.listar);
Router.get('/:id', autenticarRequisicao, controller.detalhar);
Router.post('/curtir/:id', autenticarRequisicao, controller.curtir);

module.exports = Router;