const express = require('express');
const { controladorHome, controladorLogin, controladorCarrito, controladorRegister} = require('../controllers');
const controladorCreate = require('../controllers/create');
const controladorEditar = require('../controllers/editar');
const router = express.Router();


router.get('/', controladorHome);

router.get('/carrito', controladorCarrito);

router.get('/editar', controladorEditar);
router.post('/update', controladorEditar);


module.exports = router;