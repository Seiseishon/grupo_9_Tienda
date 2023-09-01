const express = require('express');
const { controladorHome, controladorLogin, controladorCarrito, controladorRegister} = require('../controllers');
const router = express.Router();


router.get('/', controladorHome);

router.get('/login', controladorLogin);

router.get('/carrito', controladorCarrito);

router.get('/register', controladorRegister);

module.exports = router;