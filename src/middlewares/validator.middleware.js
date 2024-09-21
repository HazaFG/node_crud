export const validateSchema = (schema) => (req, res, next) =>{
    try{
        console.log('Este es el req body bro: ', req.body)
        schema.parse(req.body)
        next()
    }catch(error){
        //WTF DALE UNA BUENA LEIDA A ESTA JALADA SI ALGUN DIA LO QUIERES REPLICAR
        return res.status(400).json({error: error.errors.map(error => error.message)})
    }
}

