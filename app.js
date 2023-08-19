const express = require('express');
const app = express ();

app.use(express.static('public'))

app.listen(3000, () =>{
    console.log("Servidor andando");
});

app.get('/', (req,res) =>{
    res.sendFile(__dirname + '/views/index.html')
});






app.get('/login', (req,res) =>{
    res.sendFile(__dirname + '/views/login.html')
});

app.get('/carrito', (req,res) =>{
    res.sendFile(__dirname + '/views/carrito.html')
});





app.get('/producto/SmartTVde60pulgadas4KMarcaRCA', (req,res)=>{
    res.sendFile(__dirname + '/views/productos.html')
})