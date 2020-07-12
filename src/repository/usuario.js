const
    Usuario = require('../model/Usuario'),
    { gerarCredenciais } = require('../service/auth.js');

/**
 * 
 * @param {Usuario} dadosUsuario
 * @returns {boolean} false: Usuário já existe no banco de dados; true: Usuário foi cadastrado
 */
function cadastrarUsuario(dadosUsuario) {
    return Usuario.find({ email: dadosUsuario.email })
        .then(data => {
            if (data.length > 0) {
                return false;
            }

            const credenciais = gerarCredenciais(dadosUsuario.senha);
            const usuario = new Usuario({...dadosUsuario, ...credenciais });
            usuario.save();
            return true;
        });
}

module.exports = { cadastrarUsuario };