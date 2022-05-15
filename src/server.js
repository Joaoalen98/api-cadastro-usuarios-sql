import express from "express";
import sequelize from "./config/conexao.js";
import usuariosRouter from "./routes/UsuariosRoutes.js";

const server = express();

server.use(
    express.json(),
    usuariosRouter
);

sequelize.sync()
    .then(() => console.log(`conectado ao banco`))
    .catch(err => console.log(err.message));

export default server