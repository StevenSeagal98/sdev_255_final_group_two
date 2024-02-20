const express = require('express')
const handlebars = require('express-handlebars')
const path = require('path')
require('dotenv').config()

const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))

//Handlebars - html templating setup
app.set('view engine', 'hbs')
app.engine('hbs', handlebars.engine({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs',
    defaultLayout: 'main',
    partialsDir: __dirname + '/views/partials'
}))

const hbs = handlebars.create({})
hbs.handlebars.registerPartial('nav', '{{{nav}}}')
hbs.handlebars.registerPartial('footer', '{{{footer}}}')
hbs.handlebars.registerPartial('course', '{{{course}}}')
hbs.handlebars.registerPartial('poulis', '{{{poulis-partial}}}')

//DB Connection
require('./db/db')

//Routes
app.use('/', require('./routes'))

//Start Server
const port = process.env.PORT || 5555
app.listen(port, () => console.log(`Server is running on port ${port}`))