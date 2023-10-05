const { json } = require('express');
const fs = require ('fs');
const path = require('path');
const {validationResult} = require('express-validator');
const User = require('../models/user')
const bcryptjs = require('bcryptjs')

const controladorUser = {
    //agrego
    register: function(req,res){
        return res.render('register')
    },
    processRegister: (req,res) => {
        const resultValidation = validationResult(req);

        if(resultValidation.errors.length > 0){
            return res.render('register'),{
                errors : resultValidation.mapped(),
                oldData: req.body
            }
        }
        let userInDB = User.findByField('email', req.body.email);
        
        if(userInDB){
            return res.render('register',{
                errors: {
                    email:{
                        msg:'Este email ya esta registrado'
                    }
                },
                oldData: req.body
            });
        }
        let userToCreate ={
            ...req.body,
            password: bcryptjs.hashSync(req.body.password,10),
            avatar: req.file.filename
        }
        let userCreated = User.create(userToCreate);
        return res.redirect('/user/login')
    },
    login: function(req,res){
        // const datos = fs.readFileSync('../datos/userLogin.json', 'utf8');
         res.render('login')
    },

    loginProcess:(req,res) => {
        let userToLogin = User.findByField('email',req.body.email);

        if (userToLogin){
            let isOkPassword = bcryptjs.compareSync(req.body.password,userToLogin.password);
            if(isOkPassword){
                delete userToLogin.password;
                req.session.userLogged = userToLogin;
                return res.redirect('/user/profile')
            }
        }
            return res.render('login',{
                errors:{
                    email:{
                        msg:'contraseña incorrecta'
                    }
                }
            });
    },
    profile:(req,res)=>{
        return res.render('profile',{
            user: req.session.userLogged
        })
    },
    logout:(req,res)=>{
        req.session.destroy();
        return res.redirect('/');
    }
}


module.exports = controladorUser