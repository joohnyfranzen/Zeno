const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const User = require('./User')

const Other = db.define('Other', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
    },
    subject: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
    },
})


module.exports = Other