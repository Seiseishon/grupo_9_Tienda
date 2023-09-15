const express = require('express');
const controladorProducts = require('../controllers/productos');
const router = require('.');

const routerProduct = express.Router();

routerProduct.get('/create', controladorProducts.productCreate)
routerProduct.get('/productsDetail/:id', controladorProducts.detail)
routerProduct.get('/listado',controladorProducts.producto)
routerProduct.post('/create',controladorProducts.create)
routerProduct.get('/delete',controladorProducts.destroy);
routerProduct.post('/delete/:id',controladorProducts.destroy);
routerProduct.get('/editar/:id',controladorProducts.editar);
routerProduct.post('/editar/:id',controladorProducts.update);


module.exports = routerProduct;