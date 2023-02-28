const express = require('express');
const route = express.Router();
const {createPedido} = require('../controllers/pedido')

route.post('/post-pedido', createPedido)

module.exports = route;