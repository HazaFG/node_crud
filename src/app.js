import express, { json } from 'express'
import morgan from 'morgan';

let array = [1,2,3,4]

import authRoutes from './routes/auth.routes.js'
import taskRoutes from './routes/tasks.routes.js'
import cookieParser from 'cookie-parser';

const app = express()
app.use(cookieParser())

//morgan muestra las peticiones que han llegado por consola
app.use(morgan('dev'))

//Para que podamos usar los json
app.use(express.json())

//Definiendo la ruta que tiene que haber antes de auth
app.use('/api', authRoutes)
app.use('/api', taskRoutes)

export default app;