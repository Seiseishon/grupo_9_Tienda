const { json } = require('express');
const fs = require ('fs');
const path = require('path');

const controladorProducts = {
    producto: function(req,res){
        res.render('productos')
    },
    detail: function(req,res){
        res.render('productDetail')}
    
}

    module.exports = controladorProducts