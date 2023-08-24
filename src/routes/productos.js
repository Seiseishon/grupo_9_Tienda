
const express = require('express');
const { controladorProducto } = require('../controllers/productos');
const { controladorProducts } = require('../controllers/productos');
const routerProduct = express.Router();

routerProduct.get('/', controladorProducto);

routerProduct.get('/detail', controladorProducts);

module.exports = routerProduct;