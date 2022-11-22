const  Sequelize  = require('sequelize')
require('dotenv').config()


const database = process.env.DATABASE;
const username = process.env.USER;
const password = process.env.PASSWORD;
const host = process.env.HOST;
const dialect = process.env.DIALECT;



const connection = new Sequelize(database, username, password, {
    host,
    dialect
} )

module.exports = connection

