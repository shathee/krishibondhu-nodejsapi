const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('test', 'root', 'example', {
    dialect: 'mariadb',
    port: 3307,
    dialectOptions: {
      // Your mariadb options here
      connectTimeout: 1000
    }
  });

// sequelize.authenticate().then(()=> console.log('DB Connected')).catch(err => console.log(err))

const User = sequelize.define('User', {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  createdAt: {
      type: DataTypes.DATE
  },
  updatedAt: {
      type: DataTypes.DATE
  }
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
// console.log(User === sequelize.models.User); // true

module.exports = User