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
const Post = require('./models/Post')
const User = require('./models/User')

//  Template Engine
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

// Body response
app.use(
    express.urlencoded({
        extended: true
    })
)

// Data in json
app.use(express.json)

//  Routes Import

//  Controler Import

//  Body Response

//  Session Middleware
app.use(
    session({
        name: "session",
        secret: "nosso_secret",
        resave: false,
        saveUninitialized: false,
        store: new FileStore({
            logFn: function() {},
            path: require('path').join(require('os').tmpdir(), 'sessions'),
        }),
        cookie: {
            secure: false,
            maxAge: 360000,
            expres: new Date(Date.now() + 360000),
            httpOnly: true
        }
    })
)

//  Flash Messages
app.use(flash)
 
//  Public Path
app.use(express.static('public'))

// sessions to res
app.use((req, res, next) => {
    if(req.session.userid) {
        res.locals.session = req.session
    }
    next()
})

//  Routes


//  Connect
conn.sync({ force: true }).then(() => { app.listen(3000)}).catch((err) => console.log(err))
