const express = require('express');
const controladorProducts = require('../controllers/productos');

const routerProduct = express.Router();

routerProduct.get('/create', controladorProducts.producto)
routerProduct.get('/productDetail', controladorProducts.detail)

routerProduct.post('/create',controladorProducts.create)
module.exports = routerProduct;