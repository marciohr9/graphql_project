import {Connection, createConnections, createConnection} from "typeorm";
require('dotenv').config({
    path: process.env.NODE_ENV === "dev" ? "config/.conexao.local.env" : "config/.conexao.env"
});
/* Criando conexão nos dois bancos Mongo e MYSQL */
/*createConnections([require('./config/ormconfig.mysql'),require('./config/ormconfing.mongo')])
    .then(()=>{
        console.log(`conectado em ${process.env.DB_MYSQL_NAME} and ${process.env.DB_MONGO_NAME}`);
    })
    .catch((error)=>{
        if(error) throw error;
});*/
createConnection();