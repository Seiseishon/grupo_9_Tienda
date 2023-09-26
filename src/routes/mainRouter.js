const {Router} = require("express");
const mainRouter = Router();

mainRouter.get("/login",(req,res) =>{
    if(!req.session.userLogged) res.redirect("user/login");
    else res.render('home');
})

module.exports = mainRouter;