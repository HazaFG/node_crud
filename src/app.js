import express, { json } from 'express'
import morgan from 'morgan';

let array = [1,2,3,4]

import authRoutes from './routes/auth.routes.js'

const app = express()

//morgan muestra las peticiones que han llegado por consola
app.use(morgan('dev'))

//Para que podamos usar los json
app.use(express.json())

//Definiendo la ruta que tiene que haber antes de auth
app.use('/api', authRoutes)

export default app;