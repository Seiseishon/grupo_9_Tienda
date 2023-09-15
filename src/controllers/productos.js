const { isUtf8 } = require('buffer');
const { json } = require('express');
const fs = require('fs');
const path = require('path');



const dato = () => {
    const rawDatos = fs.readFileSync(path.resolve(__dirname, '../datos/datos.json'), 'utf-8')

    return JSON.parse(rawDatos);
}

const controladorProducts = {
    productCreate: function (req, res) {
        res.render('create')
    },
    detail: function (req, res) {
        const products = dato();
        const id = req.params.id;
        const product = products.find(p => p.id == id);
        res.render('productDetail', {
            product
        })
    },
    create: function (req, res) {
        const newProduct = {
            id: new Date().getTime(),
            name: req.body.name,
            price: req.body.price,
            img: req.body.image,
            ver: "ver mas...",
            carrito: "carrito.jpg",
            envio: "$" + req.body.envio,

        }
        const products = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../datos/datos.json'), 'Utf8'))
        products.push(newProduct)

        const data = JSON.stringify(products)
        console.log(data)
        fs.writeFileSync(path.resolve(__dirname, '../datos/datos.json'), data)
        res.redirect('/')
    },
    producto: function (req, res) {
        const products = dato()
        res.render('productos', {
            products
        })
    },
    destroy: (req, res) => {
        let productos = dato();
        const id = +req.params.id;
        console.log(id);
        let productosEliminar = productos.filter(product => product.id !== id);
        const data = JSON.stringify(productosEliminar);
        fs.writeFileSync(path.resolve(__dirname, '../datos/datos.json'), data)
        res.redirect('/products/listado');
    },

    editar: (req, res) => {
        const products = dato()
        const id = req.params.id;
        const product = products.find(p=> p.id == id);
        res.render ('editar',{
            product
        })
    },

    update: (req, res) => {
        let products = dato();
        const newProduct = {
            id: req.params.id,
            name: req.body.name,
            price: req.body.price,
            img: req.body.image,
            ver: "ver mas...",
            carrito: "carrito.jpg",
            envio: "$" + req.body.envio,
        }
        products = products.map(product => {
            if(product.id == newProduct.id){
                return newProduct
            }else{
                return product
            }
        })
        const data = JSON.stringify(products);
        fs.writeFileSync(path.resolve(__dirname, '../datos/datos.json'), data)
        res.render('productos',{
            products
        });
    },
}


module.exports = controladorProducts