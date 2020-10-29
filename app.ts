require('dotenv').config({
    path: process.env.NODE_ENV === "dev" ? "config/.env.local" : "config/.env"
});

console.log(process.env.DB_MYSQL_NAME);
(() => console.log(process.env.APP_NAME))();
