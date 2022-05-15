import sequelize from "../config/conexao.js";
import { DataTypes } from "sequelize";

const Usuario = sequelize.define("usuario", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { modelName: "usuario" })

export default Usuario