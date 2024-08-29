// AQUI BASICAMENTE CONFIGURAS TU SERVIDOR HAZAEL

import app from './app.js'
import { conectarBD } from './db.js'

// Primero conectate a la base de datos, despues inicia el servidor y muestra el mensaje
conectarBD()

app.listen(3000)
console.log('Server on port', 3000)