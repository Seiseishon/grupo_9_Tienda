const fs = require ('fs');
const path = require('path');
const { fileURLToPath } = require('url');



const controladorUser = {
    registro: function(req,res){
        res.render('register')
    },
    userRegistrado: function(req,res){
        
    },
    login: function(req,res){
        res.render('login')
    }
}


module.exports = controladorUser