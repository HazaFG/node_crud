//ESTO ESTA RELACIONADO CON EL AUTH.ROUTES.JS JAJA, vaya coshinero me siento haciendo

import User from "../models/user.model.js"

//Van en formato json
export const register = async (req, res) => {
    // console.log(email, password, username)

    //Hacemos un request de estos tres parametros
    const {email, password, username } = req.body

    try {
        //conexion a la base de datos
        const newUser = new User({
            username,
            email,
            password
        })
    
        //Guarda nuestro modelo de usuario
        const usuarioGuardado = await newUser.save()
        //vamos a mandar un dato al frontend
        res.json(usuarioGuardado)
    
        // console.log(newUser)
        
        // res.send('Registrando')

    } catch (error) {
        console.log(error)
    }
    
}

export const login = (req, res) => {res.send('login')}