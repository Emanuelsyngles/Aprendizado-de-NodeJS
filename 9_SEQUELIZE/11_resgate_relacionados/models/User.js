const { DataTypes } = require('sequelize')

const db = require('../db/conn');
const Address = require('./Address');

const User = db.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    occupation: {
        type: DataTypes.STRING,
        require: true
    },
    newsletter: {
        type: DataTypes.BOOLEAN,   
    },
})

User.hasMany(Address)
Address.belongsTo(User)

module.exports = User;