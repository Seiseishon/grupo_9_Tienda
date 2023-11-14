const { json } = require('express');
const fs = require ('fs');
const path = require('path');
const db = require('../database/models')
const datos = ()=>{
   const rawDatos = fs.readFileSync(path.resolve(__dirname, '../datos/datos.json'), 'utf-8')
   
   return JSON.parse(rawDatos);
}

const controladorHome = (req,res)=>{
    db.Product.findAll()
            .then(products => {
                return res.render('home', {products:products})
            })
}

const controladorCarrito = (req,res)=>{
    const products = datos();
    res.render('carrito',{
        products
    })
}



const controladorRegister = (req,res)=>{
    res.render('register')
}


const controladorEditar = (req,res)=>{
    res.render('editar')
}

const controladorLoginView = (req,res)=>{
    res.render('login')
}

const controladorUser = (req, res)=>{
    res.render('user')
}

module.exports = {
    controladorCarrito,
    controladorHome,
    controladorRegister,
    controladorEditar,
    controladorLoginView,
    controladorUser,
}