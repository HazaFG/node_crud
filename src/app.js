import express from 'express'
import morgan from 'morgan';

import authRoutes from './routes/auth.routes.js'

const app = express()

//morgan muestra las peticiones que han llegado por consola
app.use(morgan('dev'))
app.use('/api', authRoutes)

export default app;