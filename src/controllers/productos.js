const { json } = require('express');
const fs = require ('fs');
const path = require('path');


const controladorProducto = (req,res)=>{
    res.render('productos')
}


const controladorProducts = (req,res)=>{
    res.render('productDetail')}


    module.exports = {
    controladorProducto,
    controladorProducts}