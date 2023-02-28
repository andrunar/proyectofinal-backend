const express = require('express');
const route = express.Router();
const {createMenu} = require('../controllers/menu')

route.post('/post-menu', createMenu)

module.exports = route;