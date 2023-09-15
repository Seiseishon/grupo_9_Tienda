const express = require('express');
const controladorProducts = require('../controllers/productos');

const routerProduct = express.Router();

routerProduct.get('/create', controladorProducts.productCreate)
routerProduct.get('/productsDetail/:id', controladorProducts.detail)
routerProduct.get('/listado',controladorProducts.producto)
routerProduct.post('/create',controladorProducts.create)
routerProduct.get('/delete',controladorProducts.destroy);
routerProduct.post('/delete/:id',controladorProducts.destroy);



module.exports = routerProduct;