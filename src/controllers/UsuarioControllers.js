import Usuario from "../models/UsuarioModel.js";

class UsuarioController {

    static criarUsuario = (req, res) => {
        const dados = req.body;
        const user = Usuario.build(dados);
        user.save()
        .then(usuarioCadastrado => res.send(`usuário cadastrado: ${usuarioCadastrado}`))
        .catch(err => {
            res.send(`Não foi possivel cadastrar o usuário - ${err.message}`);
        })
    }

    static listarUsuarios = (req, res) => {
        const usuarios = Usuario.findAll()
        .then(usuariosEncontrados => res.send(usuariosEncontrados))
        .catch(err => res.send(`Não foi possível encontrar os usuários - ${err.message}`))
    }

    static listarUsuarioPorId = (req, res) => {
        const id = req.params.id;
        Usuario.findOne({where: {id: id}})
        .then(usuarioEncontrado => res.send(usuarioEncontrado))
        .catch(err => res.send(`Não foi possível encontrar o usuário - ${err.message}`));
    }

    static atualizarUsuario = (req, res) => {
        const id = req.params.id;
        const atualizacoes = req.body;
        Usuario.update(atualizacoes, {where: {id: id}})
        .then(sucess => res.send(`usuário atualizado - ${sucess}`))
        .catch(err => res.send(`não foi possivel atualizar o usuário - ${err.message}`));
    }
}

export default UsuarioController