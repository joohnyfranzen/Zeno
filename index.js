const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const flash = require('express-flash')

//  App
const app = express()

//  Conection
const conn = require('./db/conn')

//  Models
// const User = require('./models/User')

//  Template Engine
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

//  Routes Import

//  Controler Import

//  Body Response

//  Session Middleware

//  Flash Messages
 
//  Public Path
app.use(express.static('public'))

//  Routes

//  Connect
conn.sync().then(() => { app.listen(3000)}).catch((err) => console.log(err))
