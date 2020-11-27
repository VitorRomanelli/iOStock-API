const Sequelize = require('sequelize');

const sequelize = new Sequelize("io-stock", "root", "1117", {
    host: "localhost",
    dialect: "mysql"
});

module.exports = {
    Sequelize,
    sequelize
}