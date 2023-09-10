const express = require('express');
const controladorProducts = require('../controllers/productos');

const routerProduct = express.Router();


routerProduct.get('/productDetail', controladorProducts)

module.exports = routerProduct;