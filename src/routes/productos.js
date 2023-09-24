const express = require('express');
const controladorProducts = require('../controllers/productos');
const multer = require('multer');
const path = require('path')
const router = require('.');

const routerProduct = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../../public/images'))
  },
  filename: (req, file, cb) => {
    const newFileName = 'image-' + Date.now() + path.extname(file.originalname)
    console.log(file);
    cb(null, newFileName)
  }
})

const upload = multer({ storage })

routerProduct.get('/create', controladorProducts.productCreate)
routerProduct.get('/productsDetail/:id', controladorProducts.detail)
routerProduct.get('/listado', controladorProducts.producto)
routerProduct.post('/create', upload.single('image'), controladorProducts.create)
routerProduct.get('/delete', controladorProducts.destroy);
routerProduct.post('/delete/:id', controladorProducts.destroy);
routerProduct.get('/editar/:id', controladorProducts.editar);
routerProduct.post('/editar/:id',upload.single('foto'), controladorProducts.update);


module.exports = routerProduct;