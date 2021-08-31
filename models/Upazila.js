const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbcon');

const Upazila = sequelize.define('Upazila', {
name: {
    type: DataTypes.STRING,
    allowNull: false
},
name_bn: {
    type: DataTypes.STRING,
    allowNull: false
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





module.exports = Upazila