import sequelize from "../config/conexao.js";
import { DataTypes } from "sequelize";

const Carteira = sequelize.define("carteira", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    ticker: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    preco_medio: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    quantidade: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
}, { modelName: "carteira"});

export default Carteira