const { json } = require('express');
const fs = require ('fs');
const path = require('path');
const { fileURLToPath } = require('url');





const controladorUser = {
    registro: function(req,res){
        const datos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../datos/userRegistro.json'), 'Utf8'))
        datos.push(usuarios)
        res.render('register')
    },
    userRegistrado: function(req,res){
        
    },
    login: function(req,res){
        const datos = fs.readFileSync('../datos/userLogin.json', 'utf8');
        res.render('login')
    }
}


module.exports = controladorUser