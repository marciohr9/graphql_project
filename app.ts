require('dotenv').config({
    path: process.env.NODE_ENV === "dev" ? ".env.local" : ".env"
});

console.log(process.env.DB_MYSQL_NAME);
(() => console.log(process.env.APP_NAME))();
