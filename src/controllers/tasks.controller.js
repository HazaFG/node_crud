import Task from "../models/task.model.js"

export const getTasks = async(req, res) => {
    const tasks = await Task.find({
        user: req.user.id
    }).populate('user') //Esto te trae todos los datos del user jajaja, que bueno
    res.json(tasks)
}

export const createTask = async(req, res) => {
    const {title, description, date} = req.body
    console.log("ESTE ES MI REQ USER: ", req.user)

    const newTask = new Task({
        title,
        description,
        date,
        user: req.user.id
    })

    const tareaGuardada = await newTask.save()
    res.json(tareaGuardada)
}

export const getTask = async(req, res) => {
    const task = await Task.findById(req.params.id).populate('user') // este params.id es basicamente lo que se escriba en la url de tasks.routes.js
                                       // Aqui: "/tasks/:id"

    console.log("ESTE ES EL REQ PARAMS: ", req.params.id)
    
    if(!task){ //Si no hay tarea
        return res.status(404).json({message: "Tarea no encontrada"})
    }else{
        res.json(task)
    }

}

export const deleteTask = async(req, res) => {

    const tarea = await Task.findByIdAndDelete(req.params.id) // este params.id es basicamente lo que se escriba en la url de tasks.routes.js
                                       // Aqui: "/tasks/:id"
    
    if(!tarea){
        return res.status(404).json({message: "Tarea no encontrada"})
    }else{
        return res.sendStatus(204) //Significa que todo jalo bien
    }
}

export const updateTask = async(req, res) => {
    const tarea = await Task.findByIdAndUpdate(req.params.id, req.body, {
        new: true //Esto para que nos de el dato nuevo, no el dato viejo cuando se actualice
    }) 
    
    if(!tarea){
        return res.status(404).json({message: "Tarea no encontrada"})
    }else{
        res.json(tarea)
    }
}