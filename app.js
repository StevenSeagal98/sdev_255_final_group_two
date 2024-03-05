const express = require('express')
const handlebars = require('express-handlebars')
const path = require('path')
const { Course } = require('./models/courses')
const session = require('express-session')
require('dotenv').config()

const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))

//Handlebars - html templating setup
app.set('view engine', 'hbs')
app.engine('hbs', handlebars.engine({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs',
    defaultLayout: 'main',
    partialsDir: __dirname + '/views/partials'
}))

const hbs = handlebars.create({})
hbs.handlebars.registerHelper('ifEquals', (arg, argTwo) => arg == argTwo)
hbs.handlebars.registerPartial('nav', '{{{nav}}}')
hbs.handlebars.registerPartial('footer', '{{{footer}}}')
hbs.handlebars.registerPartial('course', '{{{course}}}')

//DB Connection
require('./db/db')

//Routes
app.use('/', require('./routes'))
app.post('/courses', (req, res) => {
    const course = new Course(req.body);
    course.save()
        .then((result) => {
            res.redirect()
        })
        .catch((err) => {
            console.log(err)
        })
})

app.delete('/courses/:id', (req, res) => {
    const id = req.params.id;
    
    Course.findByIdAndDelete(id)
      .then(result => {
        res.json({ redirect: '/courses' });
      })
      .catch(err => {
        console.log(err);
      });
  });

//Start Server
const port = process.env.PORT || 5555
app.listen(port, () => console.log(`Server is running on port ${port}`))
