const { get, post, put, del } = require('../controllers/courses')
const coursesRouter = require('express').Router()

coursesRouter.get('/:courseId?', get)
coursesRouter.post('/', post)
coursesRouter.put('/', put)
coursesRouter.delete('/courses/{{this._id}}', del)

module.exports = coursesRouter
