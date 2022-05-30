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
const Other = require('./models/Other')
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
app.use(express.json())

//  Routes Import
const postsRoutes = require('./routes/postsRoutes')
const authRoutes = require('./routes/authRoutes')
const otherRoutes = require('./routes/otherRoutes')

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
app.use(flash())
 
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
app.use('/posts', postsRoutes)
app.use('/', authRoutes)
app.use('/', otherRoutes)


//  Connect
conn.sync().then(() => { app.listen(3000)}).catch((err) => console.log(err))
