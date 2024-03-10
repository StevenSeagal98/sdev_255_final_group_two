const { get, post } = require('../controllers/cart');
const cartRouter = require('express').Router();

cartRouter.get('/', get)
cartRouter.post('/', post)

module.exports = cartRouter
