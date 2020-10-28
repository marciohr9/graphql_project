module.exports = {
    type: process.env.DB_MYSQL_TYPE,
    host: process.env.DB_MYSQL_HOST,
    port: process.env.DB_MYSQL_PORT,
    username: process.env.DB_MYSQL_USER,
    password: process.env.DB_MYSQL_PASSWORD,
    database: process.env.DB_MYSQL_NAME,
    synchronize: true,
    logging: false,
    entities: [
       "/model/**/*.ts"
    ],
    migrations: [
       "/migration/**/*.ts"
    ],
    subscribers: [
       "/subscriber/**/*.ts"
    ]
};