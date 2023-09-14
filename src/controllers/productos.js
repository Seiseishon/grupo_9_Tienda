const { isUtf8 } = require('buffer');
const { json } = require('express');
const fs = require('fs');
const path = require('path');


const dato = ()=>{
    const rawDatos = fs.readFileSync(path.resolve(__dirname, '../datos/datos.json'), 'utf-8')
   
   return JSON.parse(rawDatos);
}

const controladorProducts = {
    productCreate: function (req, res) {
        res.render('create')
    },
    detail: function (req, res) {
        res.render('productDetail')
    },
    create: function (req, res) {
        const newProduct = {
            id: new Date().getTime(),
            name: req.body.name,
            price: req.body.price,
            img: req.body.image,
            ver: "ver mas...",
            carrito: "carrito.jpg",
            envio:"$" + req.body.envio,

        }
        const products = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../datos/datos.json'), 'Utf8'))
        products.push(newProduct)

        const data = JSON.stringify(products)
        console.log(data)
        fs.writeFileSync(path.resolve(__dirname, '../datos/datos.json'), data)
        res.redirect('/')
    },
    producto: function (req,res){
        const products = dato()
        res.render('productos',{
            products
        })
    }

    
}


module.exports = controladorProducts