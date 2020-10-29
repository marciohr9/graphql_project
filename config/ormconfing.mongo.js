module.exports = {
    name: "dbMongoDBConnection",
    type: process.env.DB_MONGO_TYPE,
    url: `mongodb+srv://${process.env.DB_MONGO_USER}:${process.env.DB_MONGO_PASSWORD}@${process.env.DB_MONGO_CLUSTER}.${process.env.DB_MONGO_CLUSTER_ID}.mongodb.net/${process.env.DB_MONGO_DATABASE}?retryWrites=true&w=majority`,
    synchronize: true,
    logging: true,
    useUnifiedTopology: true,
    entities: ["./model/mongodb/**/*.ts"]
 };