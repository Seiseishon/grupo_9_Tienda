const express = require('express');
const { controladorHome, controladorLogin, controladorCarrito, controladorRegister} = require('../controllers');
const controladorCreate = require('../controllers/create');
const router = express.Router();


router.get('/', controladorHome);

router.get('/login', controladorLogin);

router.get('/carrito', controladorCarrito);

router.get('/register', controladorRegister);

router.post('/resgister', controladorCreate)

module.exports = router;