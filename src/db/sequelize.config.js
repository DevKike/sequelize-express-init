const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('task_crud', 'root', 'Alvaro1516!', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
