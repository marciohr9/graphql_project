import {createConnection} from "typeorm";
require('dotenv').config({
    path: process.env.NODE_ENV === "dev" ? "config/.conexao.local.env" : "config/.conexao.env"
});
console.log(`rodando no ${process.env.DB_MYSQL_NAME}`);

createConnection(require('./config/ormconfig'));