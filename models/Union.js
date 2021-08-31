const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbcon');

const Union = sequelize.define('Union', {
name: {
    type: DataTypes.STRING,
    allowNull: false
},
name_bn: {
    type: DataTypes.STRING,
    allowNull: false
},
upazila_id: {
    type: DataTypes.INTEGER
},
district_id: {
    type: DataTypes.INTEGER
},
division_id: {
    type: DataTypes.INTEGER
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





module.exports = Union