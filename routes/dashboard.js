const { get } = require('../controllers/dashboard')
const dashboardRouter = require('express').Router()

dashboardRouter.get('/', get)
dashboardRouter.get('/cart', get)

module.exports = dashboardRouter