const fs = require('fs')
const path = require('path');
const User = {   
    buscarUsuario: function (email,password){
        const datos = fs.readFileSync(path.resolve(__dirname, '../datos/userLogin.json'), 'utf-8')
        const datosObj = JSON.parse(datos)
        let usuarioExiste=null;
        for(let i=0; i < datosObj.length; i++){
            if(datosObj[i].email === email ){
                if(datosObj[i].password === password ){
                    usuarioExiste=datosObj[i];
                    break;
                }
            }
        }
        return usuarioExiste;
    }, 
}
module.exports = User;