const Sequelize = require('sequelize');

const HOST = process.env.DATABASE_HOST;
const PORT = process.env.DATABASE_PORT;
const USER = process.env.DATABASE_USER;
const PASSWORD = process.env.DATABASE_PASSWORD;
const DATABASE = process.env.DATABASE_NAME;

const sequelize = new Sequelize(DATABASE, USER, PASSWORD, {
    host: HOST,
    port: PORT,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

function connect() {
    return sequelize.authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });
}

function close() {
    sequelize.close();
}

module.exports = {
    connect,
    close
};
