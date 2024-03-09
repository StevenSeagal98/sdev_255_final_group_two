const { get } = require('../controllers/enroll')
const dashboardRouter = require('express').Router()

dashboardRouter.get('/', get)

module.exports = dashboardRouter