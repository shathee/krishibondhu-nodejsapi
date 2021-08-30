const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../dbcon');

const User = sequelize.define('User', {
username: {
    type: DataTypes.STRING,
    allowNull: false
    },
  password: {
    type: DataTypes.STRING
  },
  status: {
    type: DataTypes.ENUM,
    values: ['active', 'pending', 'deleted']
  },
  role: {
    type: DataTypes.ENUM,
    values: ['farmer', 'counselor', 'admin']
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
// (async () => {
//     await sequelize.sync({ force: true });
//     console.log("The table for the User model was just (re)created!");

//   })();



module.exports = User