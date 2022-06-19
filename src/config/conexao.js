import { Sequelize } from "sequelize";
import "dotenv/config";

const sequelize = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.USER_NAME,
    process.env.USER_PASSWORD,
    {
        host: process.env.HOST,
        dialect: "mysql" // Exemplo para conexão em banco de dados MySQL. Pode ser modificado para uso com SQL Server, PostgreSQL, etc
    }
);

export default sequelize
