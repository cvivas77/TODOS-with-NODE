const {Sequelize }= require('sequelize');
const db = new Sequelize({
  database: 'todoapp',
  username: 'postgres',
  password: 'root',
  host: 'localhost',
  port: '5432',
  dialect: 'postgres'
});

module.exports = db;