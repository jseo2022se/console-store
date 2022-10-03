// express loaded
const express = require('express')

// methodOverride acquired
const methodOverride = require('method-override')

// configuring/setup mongo
const mongoConfig = require('./config')

// configuring/setting up mongo
require('dotenv').config()

// creating express app
const app = express()

// to define packaged routes
const consoleRoutes = require('./routes/vgconsoleRoutes')

// identify the port
const port = process.env.PORT

// view engine setup
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// middleware
app.use(express.urlencoded({extended:false}))
app.use(express.static("public"))
app.use(express.json())
app.use(methodOverride("_method"))

// default url for packaged routes
app.use('/products', consoleRoutes)

// listen to port
app.listen(port, () => { console.log('Listening on port: ', port) })

// connect to DB
mongoConfig()