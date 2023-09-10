const express = require('express');




const app = express ();
const PORT = 3000


const methodOverride = require('method-override');
app.use(methodOverride('_method'));


const router = require('./src/routes');
const routerProduct = require('./src/routes/productos');
const routerCreate=require('./src/routes/create');


app.set('view engine', 'ejs')
app.set('views', './src/views')

app.use(express.static('public'))
app.use(router);
app.use(routerProduct);
app.use(routerCreate)

app.listen(PORT, () =>{
    console.log("Servidor andando");
});
