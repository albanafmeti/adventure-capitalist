require('dotenv').config();

const HOST = process.env.DATABASE_HOST;
const PORT = process.env.DATABASE_PORT;
const USER = process.env.DATABASE_USER;
const PASSWORD = process.env.DATABASE_PASSWORD;
const DATABASE = process.env.DATABASE_NAME;

module.exports = {
    development: {
        username: USER,
        password: PASSWORD,
        database: DATABASE,
        host: HOST,
        port: PORT,
        dialect: "mysql",
        migrationStorageTableName: "migrations",
        dialectOptions: {
            multipleStatements: true
        }
    },
    production: {
        username: USER,
        password: PASSWORD,
        database: DATABASE,
        host: HOST,
        port: PORT,
        dialect: "mysql",
        migrationStorageTableName: "migrations"
    }
};
