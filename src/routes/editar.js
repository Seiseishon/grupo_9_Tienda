const express = require('express');
const routerEditar=express.Router();
const path = require('path')


const controladorEditar = require('../controllers/editar');




routerEditar.get('/', controladorEditar)

module.exports = routerEditar;