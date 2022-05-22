import Usuario from "../models/UsuarioModel.js";
import bcrypt from "bcrypt";

class UsuarioController {

    static criarUsuario = (req, res) => {
        const dados = req.body;
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.senha, salt);
        req.body.senha = hash
        
        const user = Usuario.build(dados);
        user.save()
        .then(usuarioCadastrado => res.status(201).send(`usuário cadastrado: ${usuarioCadastrado}`))
        .catch(err => {
            res.status(500).send(`Não foi possivel cadastrar o usuário - ${err.message}`);
        })
    }

    static listarUsuarios = (req, res) => {
        const usuarios = Usuario.findAll()
        .then(usuariosEncontrados => res.status(200).send(usuariosEncontrados))
        .catch(err => res.status(500).send(`Não foi possível encontrar os usuários - ${err.message}`))
    }

    static listarUsuarioPorId = (req, res) => {
        const id = req.params.id;
        Usuario.findOne({where: {id: id}})
        .then(usuarioEncontrado => res.status(200).send(usuarioEncontrado))
        .catch(err => res.status(500).send(`Não foi possível encontrar o usuário - ${err.message}`));
    }

    static atualizarUsuario = (req, res) => {
        const id = req.params.id;
        const atualizacoes = req.body;

        if(req.body.senha){
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(req.body.senha, salt);
            req.body.senha = hash
        }

        Usuario.update(atualizacoes, {where: {id: id}})
        .then(sucess => res.status(200).send(`usuário atualizado - ${sucess}`))
        .catch(err => res.status(500).send(`não foi possivel atualizar o usuário - ${err.message}`));
    }

    static deletarUsuarioPorId = (req, res) => {
        const id = req.params.id
        Usuario.destroy({where: {id: id}})
        .then(sucess => res.status(200).send(`Usuário deletado com sucesso - ${sucess}`))
        .catch(err => res.status(500).send(`Não foi possivel deletar o usuário - ${err}`))
    }
}

export default UsuarioController