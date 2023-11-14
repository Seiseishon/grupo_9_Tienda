const { isUtf8 } = require('buffer');
const { json } = require('express');
const fs = require('fs');
const path = require('path');
const db = require('../database/models')


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
        /*const newProduct = {
            name: req.body.name,
            price: req.body.price,
            img: req.file.filename,
            envio: "$" + req.body.envio,

        }
        const products = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../datos/datos.json'), 'Utf8'))
        products.push(newProduct)*/
        db.Product.create({
            name: req.body.name,
            price: req.body.price,
            img: req.file.filename,
            envio: "$" + req.body.envio,
        })
        .then(products => {
            res.redirect('/')
        })
        //const data = JSON.stringify(products)
        //fs.writeFileSync(path.resolve(__dirname, '../datos/datos.json'), data)
        //res.redirect('/')
    },
    producto: function (req, res) {
        db.Product.findAll()
            .then(products => {
                return res.render('productos', {products:products})
            })
    },
    destroy: (req, res) => {
        //let productos = dato();
        const id = +req.params.id;
        db.Product.destroy ({
            where : {
                id
            } 
        }).then(products => {
            res.redirect('/products/listado')
        })
        //let productosEliminar = productos.filter(product => product.id !== id);
        //const data = JSON.stringify(productosEliminar);
        //fs.writeFileSync(path.resolve(__dirname, '../datos/datos.json'), data)
        //res.redirect('/products/listado');
    },

    editar: (req, res) => {
        const products = dato()
        const id = req.params.id;
        db.Product.findByPk( id, {raw:true})
        .then(products => {
            return res.render('editar', {product:products})
        })
        //const product = products.find(p=> p.id == id);
        //res.render ('editar',{
        //    product
        //})
    },

    update: (req, res) => {
        //let products = dato();
        const id=+ req.params.id;
        db.Product.update ({
            name: req.body.name,
            price: req.body.price,
            img: req.file.filename,
            envio: "$" + req.body.envio,
        },
        {
            where : {
                id
            } 
        }).then(products => {
            res.redirect('/products/listado')
        })

        /*const newProduct = {
            id: req.params.id,
            name: req.body.name,
            price: req.body.price,
            img: req.file.filename,
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
        */
    },
}


module.exports = controladorProducts