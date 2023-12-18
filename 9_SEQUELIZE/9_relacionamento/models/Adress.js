const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const User = require('./User')

const Addresss = db.define('Address', {

    street: {
        type: DataTypes.STRING,
        require: true,
    },
    number: {
        type: DataTypes.STRING,
        require: true,
    },
    city: {
        type: DataTypes.STRING,
        require: true,
    }

});

Addresss.belongsTo(User)

module.exports = Addresss