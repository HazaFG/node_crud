// UN MODELO ES UNA MANERA DE ESPECIFICAR A MONGODB QUE ES LO QUE ESTAMOS GUARDANDO, COMO VAN A LUCIR LOS DATOS QUE ESTAMOS GUARDANDO, NO TODOS LOS DATOS SON IGUALES

// ESTRUCTURA FIJA PARA MONGODB

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

export default mongoose.model('User', userSchema)

