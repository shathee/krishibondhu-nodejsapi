const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbcon');

const Division = sequelize.define('Division', {
name: {
    type: DataTypes.STRING,
    allowNull: false
},
name_bn: {
    type: DataTypes.STRING,
    allowNull: false
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





module.exports = Division