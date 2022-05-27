const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const User = require('./User')

const Driver = db.define('Driver', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
    },
})

Driver.belongsTo(User)
User.hasMany(Driver)

module.exports = Driver