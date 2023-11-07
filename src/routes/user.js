const express = require('express');
const path = require('path')
const controladorUser = require('../controllers/user');
const multer = require('multer');
const routerUser = express.Router();
const guestMiddleware = require('../middleware/guestMiddleware')
const authMiddleware = require('../middleware/authMiddleware')

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

routerUser.get('/register',guestMiddleware, controladorUser.register);
routerUser.post('/register', upload.single('foto'), controladorUser.processRegister);

routerUser.get('/login',guestMiddleware, controladorUser.login);
routerUser.post('/login', controladorUser.loginProcess);

routerUser.get('/profile',authMiddleware, controladorUser.profile);
//routerUser.post('/profile',authMiddleware, controladorUser.profile);

routerUser.get('/logout',controladorUser.logout);
//routerUser.post('/logout',controladorUser.logout);

module.exports = routerUser