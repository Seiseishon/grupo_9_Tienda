const express = require('express');
const routerCreate=express.Router();
const path =require('path')


const controladorCreate = require('../controllers/create');




routerCreate.get('/crear', controladorCreate)

module.exports = routerCreate;