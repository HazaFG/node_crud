//ESTO ESTA RELACIONADO CON EL AUTH.ROUTES.JS JAJA, vaya coshinero me siento haciendo

import User from "../models/user.model.js"
import bcrypt from 'bcryptjs'
import { createAccessToken } from "../libs/jwt.js"

//Van en formato json
export const register = async (req, res) => {
    // console.log(email, password, username)

    //Hacemos un request de estos tres parametros
    const {email, password, username } = req.body


    // INFORMACION: EL TOKEN NO ES MAS QUE UN STRING QUE RECIBE INFORMACION ADICIONAL DEL FRONTEND, Y CUANDO ME QUIERA PEDIR ALGO TIENE QUE DEVOLVER ESE STRING A MODO DE PASE, CADA VEZ QUE PIDE ALGO TIENE QUE DEVOLVER ESE PASE PARA SABER SI TIENE AUTORIZACION

    try {

        const passwordHash = await bcrypt.hash(password, 10) //string aleatorio para encriptar la contrase;a

        //conexion a la base de datos
        const newUser = new User({
            username,
            email,
            password: passwordHash,
        })
    
        //Guarda nuestro modelo de usuario
        const usuarioGuardado = await newUser.save()

        //Creamos el token
        const token = await createAccessToken({id: usuarioGuardado._id});

        //Mandamos la respuesta
        res.cookie("token", token);
        //vamos a mandar un dato al frontend
        res.json({
            id: usuarioGuardado._id,
            username: usuarioGuardado.username,
            email: usuarioGuardado.email,
            createdAt: usuarioGuardado.createdAt,
            updateAt: usuarioGuardado.updatedAt,
        })
    
        // console.log(newUser)
        
        // res.send('Registrando')

    } catch (error) {
        res.status(500).json({message: error.message})
    }
    
}

export const login = (req, res) => {res.send('login')}