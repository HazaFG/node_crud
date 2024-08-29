// Setear la base de datos

import mongoose from "mongoose";

export const conectarBD = async () => {
    try {
        await mongoose.connect('mongodb://localhost/merndb')
        console.log(">>> DB IS CONNECTED")
    } catch (error) {
        console.log(error)
    }
};