// LOS MIDDLEWARES SON FUNCIONES QUE SE VAN A EJECUTAR ANTES DE QUE LLEGUEN A UNA RUTA

import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config.js'; //NUNCA SE TE OLVIDE PONERLE EL .JS A ESTA MIERDA

//Se requieren estos tres parametros para considerarse un middleware
export const authRequired  = (req, res, next) => { //next significa que hay todavia una funcion despues de la respuesta, que seria la ruta real
    const {token} = req.cookies;
    console.log(token)

    if(!token){
        return res.status(401).json({message: "No hay token, autorizacion denegada"});
    }

    jwt.verify(token, TOKEN_SECRET, (err, user)=>{
        if(err) return res.status(403).json({message: "Token invalido"})
            


        req.user = user; // Guardamos la información del usuario en req.user
        console.log(user)
        next()
    })
}