const express = require('express');
const path = require('path')
const controladorUser = require('../controllers/user');
const multer = require('multer');
const routerUser = express.Router();

const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null, path.join(__dirname,'../../public/images/imagenesDeUsuario'))
    },
    filename: (req,file,cb)=>{
        const newFileName = 'foto-' + Date.now() + path.extname(file.originalname);
        console.log(file);
        cb(null, newFileName);
    }
})

const upload = multer({storage})

routerUser.get('/register', controladorUser.registro);
routerUser.post('/register', upload.single('foto'), controladorUser.userRegistrado)


routerUser.get('/login', controladorUser.login)
routerUser.post('/login', controladorUser.loginProcess)

module.exports = routerUser