const { json } = require('express');
const fs = require ('fs');
const path = require('path');
const { fileURLToPath } = require('url');

const user = require('../models/user')



const controladorUser = {
    loginProcess:(req,res) => {
        const email = req.body.email
        const password = req.body.password;
        let usuarioExiste= user.buscarUsuario(email,password);

        if (usuarioExiste){
            req.session.userLogged = usuarioExiste.email;
            res.redirect('/')
        }else{
            return res.render('login',{
                errors:{
                    email:{
                        msg:'No se encuentra este email'
                    }
                }
            });
        }
    },  
    register: function(req,res){
        //const datos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../datos/userRegistro.json'), 'Utf8'))
        //datos.push(usuarios)
        res.render('register')
    },
    userRegistrado: function(req,res){
        
    },
    login: function(req,res){
        //const datos = fs.readFileSync('../datos/userLogin.json', 'utf8');
        res.render('login')
    }
}


module.exports = controladorUser