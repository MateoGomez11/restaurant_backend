const { Sequelize } = require('sequelize');

var dataBase = 'restaurantDB';
var userName = 'postgres';
var password = '123456789';

const connection = new Sequelize(dataBase, userName, password,{
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = connection;
