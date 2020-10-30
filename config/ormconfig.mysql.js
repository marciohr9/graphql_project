module.exports = {
   name: "dbMYSQLConnection",
   type: process.env.DB_MYSQL_TYPE,
   host: process.env.DB_MYSQL_HOST,
   port: process.env.DB_MYSQL_PORT,
   username: process.env.DB_MYSQL_USER,
   password: process.env.DB_MYSQL_PASSWORD,
   database: process.env.DB_MYSQL_DATABASE,
   synchronize: true,
   logging: false,
   entities: [
      "/model/mysql/**/*.ts"
   ],
   migrations: [
      "/migration/mysql/**/*.ts"
   ],
   subscribers: [
      "/subscriber/**/*.ts"
   ]
};