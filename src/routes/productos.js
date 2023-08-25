const express = require('express');
const controladorProducts = require('../controllers/productos');

const routerProduct = express.Router();


routerProduct.get('/', controladorProducts)

module.exports = routerProduct;