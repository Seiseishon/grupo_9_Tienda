const express = require('express');
const { controladorHome, controladorLogin, controladorCarrito} = require('../controllers');
const router = express.Router();


router.get('/', controladorHome);

router.get('/login', controladorLogin);

router.get('/carrito', controladorCarrito);

module.exports = router;