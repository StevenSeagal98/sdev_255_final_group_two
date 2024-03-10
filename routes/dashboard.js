const express = require('express');
const dashboardRouter = express.Router();
const { get } = require('../controllers/dashboard'); // Ensure this path correctly leads to your dashboard controller
dashboardRouter.get('/', get);

module.exports = dashboardRouter;
