const { Sequelize, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/dbcon');

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





module.exports = User