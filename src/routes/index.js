const express = require('express');
const { controladorHome, controladorLogin, controladorCarrito, controladorRegister} = require('../controllers');
const controladorCreate = require('../controllers/create');
const controladorEditar = require('../controllers/editar');
const router = express.Router();


router.get('/', controladorHome);

router.get('/login', controladorLogin);

router.get('/carrito', controladorCarrito);

router.get('/register', controladorRegister);

router.post('/resgister', controladorCreate);

router.get('/editar', controladorEditar);
router.post('/update', controladorEditar);


module.exports = router;