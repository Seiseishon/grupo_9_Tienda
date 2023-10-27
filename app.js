const express = require('express');

const routerUser = require('./src/routes/user');
const session = require('express-session');

const app = express ();
const PORT = 3000

app.use(express.urlencoded({extended:false}));
app.use(express.json());

const methodOverride = require('method-override');
app.use(methodOverride('_method'));
app.use(session({
    secret: "Secret",
    resave: false,
    saveUninitialized: false,
}));

const router = require('./src/routes');
const routerProduct = require('./src/routes/productos');
const routerCreate=require('./src/routes/create');
const routerEditar=require('./src/routes/editar')

const controladorProducts = require('./src/controllers/productos');
const controladorCreate = require('./src/controllers/create');
const controladorEditar = require('./src/controllers/editar');
const mainRouter = require('./src/routes/mainRouter');



app.set('view engine', 'ejs')
app.set('views', './src/views')

app.use("/user",routerUser);
app.use(express.static('public'))
app.use('/products',routerProduct);
app.use(routerUser)
app.use(router);


app.listen(PORT, () =>{
    console.log("Servidor andando");
});
