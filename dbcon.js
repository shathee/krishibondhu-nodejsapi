const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('test', 'root', '', {
    dialect: 'mariadb',
    dialectOptions: {
      // Your mariadb options here
      connectTimeout: 1000
    }
  });

module.exports = sequelize;