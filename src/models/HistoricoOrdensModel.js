import sequelize from "../config/conexao.js";
import { DataTypes } from "sequelize";

const HistoricoOrdens = sequelize.define("historicoOrdens", {
    id: {
        type: DataTypes.STRING,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    id_usuario: {
        type: DataTypes.INTEGER,

        references: {
            model: "carteira",
            key: "id"
        }
    },
    id_ativo: {
        type: DataTypes.INTEGER,

        references: {
            model: "carteira",
            key: "id"
        }
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
});

export default HistoricoOrdens