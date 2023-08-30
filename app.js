const express = require('express');
const router = require('./src/routes');
const routerProduct = require('./src/routes/productos');
const app = express ();
const PORT = 3000



app.set('view engine', 'ejs')
app.set('views', './src/views')

app.use(express.static('public'))
app.use('/', router);
app.use('/products', routerProduct);


app.listen(PORT, () =>{
    console.log("Servidor andando");
});
