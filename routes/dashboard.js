const { get } = require('../controllers/dashboard')
const dashboardRouter = require('express').Router()

dashboardRouter.get('/', get)
router.get('/enroll', (req, res) => res.render('enroll'))
router.use('/dropCourse', require('./dropCourse'))

module.exports = dashboardRouter

