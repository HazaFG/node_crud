//Creacion de nuestro token, si queremos que se ejecute de manera asincrona tenemos que agregar un callback

import jwt from 'jsonwebtoken'
import { TOKEN_SECRET } from "../config.js";

export function createAccessToken(payload){

    return new Promise((resolve, reject) => {
        jwt.sign(
            payload,
            TOKEN_SECRET, 
            {
                expiresIn: "1d"
            },
            //Callback
            (err, token) => {
                if(err) reject(err)
                resolve(token)
            }
        );
    });
}
