const { get } = require('../controllers/dashboard')
const dashboardRouter = require('express').Router()

dashboardRouter.get('/', get)

module.exports = dashboardRouter

