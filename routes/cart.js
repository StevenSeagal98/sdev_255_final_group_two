const { get } = require('../controllers/cart');
const cartRouter = require('express').Router();

cartRouter.get('/cart', get);

module.exports = cartRouter;
