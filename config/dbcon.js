const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('test', 'root', 'example', {
        dialect: 'mariadb',
        port: 3307,
        dialectOptions: {
          // Your mariadb options here
          connectTimeout: 1000
        }
      });

module.exports = sequelize;