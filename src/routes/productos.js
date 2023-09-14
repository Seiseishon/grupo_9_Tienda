const express = require('express');
const controladorProducts = require('../controllers/productos');

const routerProduct = express.Router();

routerProduct.get('/create', controladorProducts.productCreate)
routerProduct.get('/productDetail', controladorProducts.detail)
routerProduct.get('/',controladorProducts.producto)

routerProduct.post('/create',controladorProducts.create)
module.exports = routerProduct;