require('dotenv').config();

const HOST = process.env.DATABASE_HOST;
const USER = process.env.DATABASE_USER;
const PASSWORD = process.env.DATABASE_PASSWORD;
const DATABASE = process.env.DATABASE_NAME;

module.exports = {
    development: {
        username: USER,
        password: PASSWORD,
        database: DATABASE,
        host: HOST,
        dialect: "mysql",
        migrationStorageTableName: "migrations",
        dialectOptions: {
            multipleStatements: true
        }
    },
    test: {
        username: USER,
        password: PASSWORD,
        database: DATABASE,
        host: 'localhost',
        dialect: "mysql",
        migrationStorageTableName: "migrations"
    },
    production: {
        username: USER,
        password: PASSWORD,
        database: DATABASE,
        host: HOST,
        dialect: "mysql",
        migrationStorageTableName: "migrations"
    }
};
