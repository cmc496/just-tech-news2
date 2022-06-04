// import the Sequelize constructor from the library
const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our db, pass in your MySQL information for username and password
const sequelize = new Sequelize(process.env.DB_NAME, 'root', 'Cait.My99', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;