const express = require('express');




const app = express ();
const PORT = 3000

app.use(express.urlencoded({extended:false}));
app.use(express.json());

const methodOverride = require('method-override');
app.use(methodOverride('_method'));


const router = require('./src/routes');
const routerProduct = require('./src/routes/productos');
const routerCreate=require('./src/routes/create');
const controladorProducts = require('./src/controllers/productos');
const controladorCreate = require('./src/controllers/create');


app.set('view engine', 'ejs')
app.set('views', './src/views')

app.use(express.static('public'))
app.use('/products',routerProduct);

app.use(router);


app.listen(PORT, () =>{
    console.log("Servidor andando");
});
