import { z } from "zod";

export const registerSchema = z.object({
    username: z.string({
        required_error: 'El username es requerido'
    }),
    email: z.string({
        required_error: 'El email es requerido'
    }).email({
        message: 'El email ingresado no es valido'
    }),
    password: z.string({
        required_error: 'La contrasena es requerida'
    }).min(6, {
        message: 'La contrasena debe tener minimo 6 caracteres'
    })
})

export const loginSchema = z.object({
    email: z.string({
        required_error: 'El email es requerido'
    }).email({
        message: 'El email es invalido'
    }),
    password: z.string({
        required_error: 'La contrasena es requerida'
    }).min(6, {
        message: 'La contrasena debe tener minimo 6 caracteres'
    })
})

