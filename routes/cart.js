const { get } = require('../controllers/cart');
const cartRouter = require('express').Router();

cartRouter.get('/', get);

module.exports = cartRouter;
