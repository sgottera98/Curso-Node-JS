const { DataTypes } = require('sequelize')

const db = require('../db/conn')
const Address = require('./Address')

const User = db.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    occupation: {
        type: DataTypes.STRING,
        required: true
    },
    newsletter: {
        type: DataTypes.BOOLEAN,
    }
})

Address.belongsTo(User)

module.exports = User