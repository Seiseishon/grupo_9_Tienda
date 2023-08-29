const express = require('express');
const { controladorHome, controladorLogin, controladorCarrito, controladorFormulario} = require('../controllers');
const router = express.Router();


router.get('/', controladorHome);

router.get('/login', controladorLogin);

router.get('/carrito', controladorCarrito);

router.get('/formulario', controladorFormulario);

module.exports = router;