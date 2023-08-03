const express = require('express');
const app = express ();

app.use(express.static('public'))

app.listen(3000, () =>{
    console.log("Servidor andando");
});

app.get('/', (req,res) =>{
    res.sendFile(__dirname + '/views/index.html')
});

app.get('/producto', (req,res)=>{
    res.sendFile(__dirname + '/views/productos.html')
})