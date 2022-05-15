import express from "express";
import UsuarioController from "../controllers/UsuarioControllers.js";

const usuariosRouter = express.Router();

usuariosRouter
    .get("/", (req, res) => {
        res.send("Teste da API.");
    })
    .get("/usuarios", UsuarioController.listarUsuarios)
    .get("/usuarios/:id", UsuarioController.listarUsuarioPorId)
    .post("/cadastro", UsuarioController.criarUsuario)
    .post("/usuarios/:id", UsuarioController.atualizarUsuario)

export default usuariosRouter